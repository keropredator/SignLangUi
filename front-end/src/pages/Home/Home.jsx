import { Typography, Grid, Button, Box } from "@mui/material";
import { Link, Link as RouterLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <>
      <Grid container rowSpacing={40} columnSpacing={10} sx={{ p: 3 }}>
        <Grid item container justifyContent="" alignItems="center" xs={12}>
          <Grid item xs={12} md={12} sx={{ bgcolor: "#F8FAE5" }}>
            <Typography
              mt={8}
              component="h1"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Sign language connects hearts and minds through its beauty.
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
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
                  sx={{
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textTransform: "none",
                    transition: "0.3s",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient(45deg, #3f51b5 30%, #f50057 90%)",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(315deg, #FE6B8B 30%, #FF8E53 90%)",
                    },
                  }}
                >
                  Get Started
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

      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#F1E5D1", py: 6, fontFamily: "monospace" }}
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
            Shipping
          </Typography>
          <Typography variant="body2" gutterBottom>
            Returns
          </Typography>
          <Typography variant="body2" gutterBottom>
            Order Status
          </Typography>
          <Typography variant="body2" gutterBottom>
            Payment Options
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Online Shop
          </Typography>
          <Typography variant="body2" gutterBottom>
            Watch
          </Typography>
          <Typography variant="body2" gutterBottom>
            Bag
          </Typography>
          <Typography variant="body2" gutterBottom>
            Shoes
          </Typography>
          <Typography variant="body2" gutterBottom>
            Dress
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
