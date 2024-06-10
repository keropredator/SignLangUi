import os  # Import the os module for operating system related functionalities
import cv2  # Import the OpenCV library for computer vision tasks
import torch  # Import the PyTorch library for deep learning
import numpy as np  # Import the NumPy library for numerical computations
import torch.nn as nn  # Import the PyTorch neural network module
import torch.nn.functional as F  # Import the PyTorch functional module
from pytorch_i3d import InceptionI3d  # Import the custom InceptionI3d model
import matplotlib.pyplot as plt  # Import the matplotlib library for plotting
from fastapi import FastAPI, File, WebSocket  # Import the FastAPI framework for building APIs
from typing import Annotated  # Import the Annotated type hint for function annotations
import random  # Import the random module for generating random numbers
from fastapi.middleware.cors import CORSMiddleware  # Import the CORS middleware for handling Cross-Origin Resource Sharing
import time  # Import the time module for time-related operations
import traceback  # Import the traceback module for printing stack traces

app = FastAPI()  # Create a FastAPI application instance

# Add CORS middleware if necessary
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, you can restrict this to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

classes_file_path = 'preprocess/wlasl_class_list.txt'  # Set the path to the file containing the class list
with open(classes_file_path, 'r', encoding='utf-8') as f:
    classes = f.read()  # Read the contents of the class list file
classes = classes.split('\n')  # Split the contents of the class list file into a list of classes

def get_classes(index):
    return classes[index]  # Return the class at the specified index

def load_rgb_frames_from_bytes(bytes_list, num=-1):
    frames = []  # Create an empty list to store the frames
    count = 0  # Initialize a counter variable
    for byte_data in bytes_list:
        img = cv2.imdecode(np.frombuffer(byte_data, np.uint8), cv2.IMREAD_COLOR)  # Decode the image from bytes
        if count == 1:
            cv2.imwrite(f'preview/prev0.jpg', img)  # Save the first frame as a preview image
        if img is None:
            continue  # Skip to the next iteration if the image is None
        h, w, c = img.shape  # Get the height, width, and number of channels of the image
        sc = 224 / h  # Calculate the scaling factor for resizing the image
        img = cv2.resize(img, dsize=(0, 0), fx=sc, fy=sc)  # Resize the image
        if count == 1:
            cv2.imwrite(f'preview/prev1.jpg', img)  # Save the resized frame as a preview image
        img = (img / 255.0) * 2 - 1  # Normalize the pixel values of the image
        frames.append(img)  # Add the normalized image to the list of frames
        count += 1  # Increment the counter variable
        if count == num:
            break  # Break the loop if the desired number of frames is reached
    return torch.Tensor(np.asarray(frames, dtype=np.float32))  # Convert the list of frames to a PyTorch tensor

def run_on_tensor(weights, ip_tensor, num_classes):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')  # Check if CUDA is available and set the device accordingly
    i3d = InceptionI3d(400, in_channels=3)  # Create an instance of the InceptionI3d model
    i3d.replace_logits(num_classes)  # Replace the logits layer of the model with a new layer for the specified number of classes
    i3d.load_state_dict(torch.load(weights, map_location=torch.device(device)))  # Load the pre-trained weights of the model
    i3d.to(device)  # Move the model to the specified device
    i3d.eval()  # Set the model to evaluation mode

    ip_tensor = ip_tensor.to(device)  # Move the input tensor to the specified device
    per_frame_logits = i3d(ip_tensor)  # Forward pass through the model to get per-frame logits

    if len(per_frame_logits.shape) == 5:  # Check if the shape of per_frame_logits is (N, C, T, H, W)
        predictions = torch.mean(per_frame_logits, dim=(3, 4))  # Compute the mean across the spatial dimensions (H, W)
    elif len(per_frame_logits.shape) == 4:  # Check if the shape of per_frame_logits is (N, C, T, H)
        predictions = torch.mean(per_frame_logits, dim=3)  # Compute the mean across the spatial dimension (H)
    else:
        raise ValueError(f"Unexpected shape of per_frame_logits: {per_frame_logits.shape}")  # Raise an error for unexpected shape

    predictions = torch.mean(predictions, dim=2)  # Compute the mean across the temporal dimension (T)

    out_labels = torch.argmax(predictions, dim=1).cpu().detach().numpy()  # Get the predicted labels as numpy array

    return out_labels  # Return the predicted labels

# Load model weights and classes once
weights = 'archived/asl2000/FINAL_nslt_2000_iters=5104_top1=32.48_top5=57.31_top10=66.31.pt'  # Set the path to the model weights
num_classes = 2000  # Set the number of classes

@app.websocket("/ws")  # Define a WebSocket endpoint
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()  # Accept the WebSocket connection
    images_array = []  # Create an empty list to store the received images
    try:
        while True:
            image = await websocket.receive_bytes()  # Receive an image as bytes
            images_array.append(image)  # Add the received image to the list of images
            if len(images_array) >= 64:  # Check if the number of images is equal to or greater than 64
                start = time.time()  # Record the start time
                frames_tensor = load_rgb_frames_from_bytes(images_array, num=64)  # Load the frames as a PyTorch tensor
                frames_tensor = frames_tensor.permute(3, 0, 1, 2)  # Rearrange the dimensions to C, T, H, W
                frames_tensor = frames_tensor.unsqueeze(0)  # Add a batch dimension
                out_labels = run_on_tensor(weights, frames_tensor, num_classes)  # Run the frames through the model
                prediction_text = get_classes(out_labels[0])  # Get the predicted class label
                print("time to predict: ", time.time() - start)  # Print the time taken for prediction
                await websocket.send_text(prediction_text.encode('utf-8').decode('utf-8'))  # Send the predicted class label as text
                images_array.clear()  # Clear the list of images
    except Exception as e:
        print("Exception occurred: ", e)  # Print the exception message
        traceback.print_exc()  # Print the stack trace
        await websocket.close()  # Close the WebSocket connection
