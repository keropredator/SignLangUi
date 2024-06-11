import { Typography, Grid, Button, Box } from "@mui/material";
import { Link, Link as RouterLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const tryBtnStyle = {
  fontFamily: "Bavose",
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "none",
  transition: "0.3s",
  borderRadius: "10px",
  padding: "10px 50px",
  mt: 2,
  backgroundColor: "#c83c4c",
  boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .5)",
  "&:hover": {
    fontSize: "18px",
    backgroundColor: "#c83c4c",
    transition: "0.5 ease-in-out",
    transform: "scale(1.1)",
  },
};
const Home = () => {
  return (
    <>
      <Grid container rowSpacing={40} columnSpacing={10} sx={{ p: 5 }}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Grid item xs={12} md={8} align="center">
            <Typography mt={4} component="h1" variant="h2" gutterBottom>
              Sign language connects hearts and minds through its beauty.
            </Typography>
            <Typography variant="h5" paragraph>
              We are creating a world where silence speaks louder, where every
              sign is a step towards understanding. Explore how we empower
              communication for the deaf community with <br />
              cutting-edge AI Technology.
            </Typography>
            <Grid item container justifyContent="center" xs={12}>
              <RouterLink
                to="/translate"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={tryBtnStyle}
                >
                  Try it now!
                </Button>
              </RouterLink>
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
                written language in real-time using computer vision and hand
                landmarks.
              </Typography>
              <img
                src={img5}
                alt="Illustration of how SignSpeak works"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography align="center" variant="h5" gutterBottom>
                User-Friendly Interface
              </Typography>
              <Typography align="center" variant="body1" color="textSecondary">
                Our intuitive and easy-to-use interface ensures a seamless
                experience for users of all skill levels.
              </Typography>
              <img
                src={img6}
                alt="Illustration of how SignSpeak works"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
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

      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#F4F7ED", py: 6, fontFamily: "monospace", boxShadow: 8 }}
    >
      <Grid container justifyContent="space-between" sx={{ px: 4 }}>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Link
            to="/team"
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            About Us
          </Link>
          <Typography variant="body2" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body2" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body2" gutterBottom>
            Affiliate Program
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Get Help
          </Typography>
          <Typography variant="body2" gutterBottom>
            FAQ
          </Typography>
          <Typography variant="body2" gutterBottom>
            Donate
          </Typography>
          <Typography variant="body2" gutterBottom>
            Payment Options
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Online Courses
          </Typography>
          <Link
            to="https://space340.com/events/921669831/arabic-sign-language-certification-course?&v=latest"
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Arsl
          </Link>

          <Typography variant="body2" gutterBottom>
            <Link
              to="https://en.wikipedia.org/wiki/Arab_sign-language_family"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Alphabetics
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link
              to="https://www.wikihow.com/Count-to-100-in-American-Sign-Language"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Numbers
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon color="primary" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon color="primary" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon color="primary" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon color="primary" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
