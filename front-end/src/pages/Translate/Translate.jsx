import { useState, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Card, Grid, Typography } from "@mui/material";

const Translate = () => {
  const [text, setText] = useState("");
  const [conversation, setConversation] = useState([]);
  const [status, setStatus] = useState("Press Enter to start");

  const webcamRef = useRef(null);

  const sendFrames = useCallback(() => {
    if (!webcamRef.current) return;
    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onopen = () => {
      setStatus("Start");
      console.log("Connected to server");
    };
    ws.onmessage = (event) => {
      const data = event.data;
      setText((prev) => {
        let wordsArr = prev.split(" ");
        if (wordsArr[wordsArr.length - 1] === data) {
          return prev;
        }
        if (wordsArr.length > 10) {
          wordsArr = [];
          setConversation((prevConversation) => [...prevConversation, prev]);
        }
        return [...wordsArr, data].join(" ");
      });
      setStatus("Press Enter to start");
      ws.close();
    };
    ws.onclose = () => {
      console.log("Connection closed");
    };
    ws.onerror = (error) => {
      console.error("Error: ", error);
    };

    let framesSent = 0;
    let interval;
    const sendFrame = async () => {
      try {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc && ws.readyState === ws.OPEN) {
          const blob = await fetch(imageSrc).then((res) => res.blob());
          ws.send(blob);
          framesSent++;
          if (framesSent >= 64) {
            clearInterval(interval);
            setStatus("Processing");
          }
        }
      } catch (error) {
        console.error("Error sending frame: ", error);
      }
    };

    interval = setInterval(sendFrame, 1000 / 30);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setStatus("Ready ?");
        setTimeout(sendFrames, 1000);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }),
    [sendFrames];

  return (
    <Grid container spacing={3}>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <Card elevation={3} sx={{ widht: "100%", p: 3 }}>
          <Grid container justifyContent="center">
            <Webcam
              mirrored={true}
              ref={webcamRef}
              screenshotFormat="image/webp"
            />
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                bottom: "10%",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "5px",
              }}
            >
              {text}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "10%",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "5px",
              }}
            >
              {status}
            </Typography>
          </Grid>
        </Card>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Card elevation={3} sx={{ widht: "100%", p: 3 }}>
          <Typography variant="h6">Conversation</Typography>
          {conversation.map((msg, idx) => (
            <Typography key={idx} variant="body1">
              {msg}
            </Typography>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Translate;
