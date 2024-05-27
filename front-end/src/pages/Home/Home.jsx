import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const Home = () => {
  return (
    <Grid container rowSpacing={40} columnSpacing={10} sx={{ p: 5 }}>
      <Grid item container justifyContent="" alignItems="center" xs={12}>
        <Grid item xs={12} md={8}>
          <Typography
            // align="center"
            mt={8}
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
          >
            Sign language connects hearts and minds through its beauty.
          </Typography>
          <Typography
            // align="center"
            variant="h5"
            color="textSecondary"
            paragraph
          >
            We are creating a world where silence speaks louder, where every
            sign is a step towards understanding. Explore how we empower
            communication for the deaf community with <br />
            cutting-edge AI Technology.
          </Typography>
          <Grid item container justifyContent="center" xs={10}>
            <Link
              to="/translate"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontFamily: "monospace",
                  fontSize: "15px",
                  textTransform: "none",
                  transition: "0.3s",
                  // borderRadius: "10px",
                  padding: "10px 50px",
                  mt: 2,
                  backgroundColor: "#c83c4c",
                  boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .5)",
                  "&:hover": {
                    backgroundColor: "#c83c4c",
                    transition: "0.5 ease-in-out",
                    transform: "scale(1.1)",
                  },
                }}
              >
                Try it now!
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
          Our cutting-edge technology uses your device&apos;s camera to detect
          and interpret sign language gestures and expressions in real-time.
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
