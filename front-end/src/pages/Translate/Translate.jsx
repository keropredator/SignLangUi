import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Grid, Typography } from "@mui/material";

const Translate = () => {
  const [text, setText] = useState("");
  const webcamRef = useRef(null);
  const websocketRef = useRef(null);

  useEffect(() => {
    websocketRef.current = new WebSocket("ws://localhost:8000/ws");

    websocketRef.current.onmessage = (event) => {
      if (text.split(" ").length > 10) {
        setText(
          (prevText) =>
            prevText.split(" ").slice(1).join(" ") + " " + event.data
        );
        return;
      }
      setText((prevText) => prevText + " " + event.data);
    };

    websocketRef.current.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };

    return () => {
      websocketRef.current.close();
    };
  }, []);

  useEffect(() => {
    const sendFrame = async () => {
      const p = performance.now();
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc && websocketRef.current.readyState === WebSocket.OPEN) {
        const blob = await fetch(imageSrc).then((res) => res.blob());
        websocketRef.current.send(blob);
      }
      console.log("Time taken: ", performance.now() - p);
    };

    const interval = setInterval(sendFrame, 1000 / 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <Webcam mirrored={true} ref={webcamRef} screenshotFormat="image/jpeg" />
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
      </Grid>
    </Grid>
  );
};

export default Translate;
