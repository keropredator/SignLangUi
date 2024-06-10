import os
import cv2
import torch
import numpy as np
import torch.nn as nn
import torch.nn.functional as F
from pytorch_i3d import InceptionI3d  # Make sure this is correctly installed and available
import matplotlib.pyplot as plt
from fastapi import FastAPI, File, WebSocket
from typing import Annotated
import random
from fastapi.middleware.cors import CORSMiddleware
import time
import traceback

app = FastAPI()

# Add CORS middleware if necessary
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, you can restrict this to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

classes_file_path = 'preprocess/wlasl_class_list.txt'
with open(classes_file_path, 'r', encoding='utf-8') as f:
    classes = f.read()
classes = classes.split('\n')


def get_classes(index):
    return classes[index]


def load_rgb_frames_from_bytes(bytes_list, num=-1):
    frames = []
    count = 0
    for byte_data in bytes_list:
        img = cv2.imdecode(np.frombuffer(byte_data, np.uint8), cv2.IMREAD_COLOR)
        if count == 1:
            cv2.imwrite(f'preview/prev0.jpg', img)
        if img is None:
            continue
        h, w, c = img.shape
        sc = 224 / h
        img = cv2.resize(img, dsize=(0, 0), fx=sc, fy=sc)
        if count == 1:
            cv2.imwrite(f'preview/prev1.jpg', img)
        img = (img / 255.0) * 2 - 1
        frames.append(img)
        count += 1
        if count == num:
            break
    return torch.Tensor(np.asarray(frames, dtype=np.float32))


def run_on_tensor(weights, ip_tensor, num_classes):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    i3d = InceptionI3d(400, in_channels=3)
    i3d.replace_logits(num_classes)
    i3d.load_state_dict(torch.load(weights, map_location=torch.device(device)))
    i3d.to(device)
    i3d.eval()

    ip_tensor = ip_tensor.to(device)
    per_frame_logits = i3d(ip_tensor)

    if len(per_frame_logits.shape) == 5:  # (N, C, T, H, W)
        predictions = torch.mean(per_frame_logits, dim=(3, 4))  # (N, C, T)
    elif len(per_frame_logits.shape) == 4:  # (N, C, T, H)
        predictions = torch.mean(per_frame_logits, dim=3)  # (N, C, T)
    else:
        raise ValueError(f"Unexpected shape of per_frame_logits: {per_frame_logits.shape}")

    predictions = torch.mean(predictions, dim=2)  # (N, C)

    out_labels = torch.argmax(predictions, dim=1).cpu().detach().numpy()

    return out_labels


# Load model weights and classes once
weights = 'archived/asl2000/FINAL_nslt_2000_iters=5104_top1=32.48_top5=57.31_top10=66.31.pt'
num_classes = 2000


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    images_array = []
    try:
        while True:
            image = await websocket.receive_bytes()
            images_array.append(image)
            if len(images_array) >= 64:
                start = time.time()
                frames_tensor = load_rgb_frames_from_bytes(images_array, num=64)
                frames_tensor = frames_tensor.permute(3, 0, 1, 2)  # Rearrange to C, T, H, W
                frames_tensor = frames_tensor.unsqueeze(0)  # Add batch dimension
                out_labels = run_on_tensor(weights, frames_tensor, num_classes)
                prediction_text = get_classes(out_labels[0])
                print("time to predict: ", time.time() - start)
                await websocket.send_text(prediction_text.encode('utf-8').decode('utf-8'))
                images_array.clear()
    except Exception as e:
        print("Exception occurred: ", e)
        traceback.print_exc()
        await websocket.close()
