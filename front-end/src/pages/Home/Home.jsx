import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const Home = () => {
  return (
    <Grid container rowSpacing={40} columnSpacing={10} sx={{ p: 3 }}>
      <Grid item container justifyContent="center" alignItems="center" xs={12}>
        <Grid item xs={12} md={8}>
          <Typography
            align="center"
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
          >
            SignSpeak: Sign Language Translation
          </Typography>
          <Typography
            align="center"
            variant="h5"
            color="textSecondary"
            paragraph
          >
            Bridging the communication gap with AI-powered sign language
            translation.
          </Typography>
          <Grid item container justifyContent="center" xs={12}>
            <Link
              to="/translate"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} md={6} alignItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h4" gutterBottom>
            Accurate Translation
          </Typography>
          <Typography align="center" variant="body1" color="textSecondary">
            Our AI-powered technology accurately translates sign language into
            spoken and written language in real-time.
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <img
            src={img1}
            alt="AI translation of sign language to text"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>

      <Grid item container xs={12} md={6} alignItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h4" gutterBottom>
            Accessibility Empowered
          </Typography>
          <Typography align="center" variant="body1" color="textSecondary">
            Break down communication barriers and promote inclusivity with our
            innovative sign language translation tool.
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <img
            src={img2}
            alt="SignSpeak app being used for accessibility"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>

      <Grid item container xs={12} alignItems="center" direction="column">
        <Typography align="center" variant="h4" gutterBottom>
          How It Works
        </Typography>
        <Typography
          align="center"
          variant="body1"
          color="textSecondary"
          paragraph
        >
          Our cutting-edge technology uses your device's camera to detect and
          interpret sign language gestures and expressions in real-time.
        </Typography>
        <img
          src={img3}
          alt="Illustration of how SignSpeak works"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </Grid>

      <Grid item container xs={12} alignItems="center" direction="column">
        <Typography align="center" variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid item container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography align="center" variant="h5" gutterBottom>
              Sign Language Translation
            </Typography>
            <Typography align="center" variant="body1" color="textSecondary">
              SignSpeak uses AI to translate sign language into spoken and
              written language in real-time.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography align="center" variant="h5" gutterBottom>
              User-Friendly Interface
            </Typography>
            <Typography align="center" variant="body1" color="textSecondary">
              Our intuitive and easy-to-use interface ensures a seamless
              experience for users of all skill levels.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} alignItems="center" direction="column">
        <Typography align="center" variant="h4" gutterBottom>
          Join the SignSpeak Community
        </Typography>
        <Typography
          align="center"
          variant="body1"
          color="textSecondary"
          paragraph
        >
          Connect with others, share your experiences, and be part of the
          movement towards a more inclusive world.
        </Typography>
        <img
          src={img4}
          alt="SignSpeak community event"
          style={{ maxWidth: "50%", borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
