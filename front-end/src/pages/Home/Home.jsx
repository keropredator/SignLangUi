// eslint-disable-next-line no-unused-vars
import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageSlider from "./slider";
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

const animationVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
};

const Home = () => {
  const location = useLocation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Grid container rowSpacing={30} columnSpacing={10} sx={{ p: 5 }}>
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
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={animationVariants}
            style={{ width: "100%" }}
          >
            <Grid item xs={12}>
              <Typography align="center" variant="h4" gutterBottom>
                Accurate Translation
              </Typography>
              <Typography align="center" variant="body1" color="textSecondary">
                Our AI-powered technology accurately translates sign language
                into spoken and written language in real-time.
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <img
                src={img1}
                alt="AI translation of sign language to text"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Grid>
          </motion.div>
        </Grid>

        <Grid item container xs={12} md={6} alignItems="center">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={animationVariants}
            style={{ width: "100%" }}
          >
            <Grid item xs={12}>
              <Typography align="center" variant="h4" gutterBottom>
                Accessibility Empowered
              </Typography>
              <Typography align="center" variant="body1" color="textSecondary">
                Break down communication barriers and promote inclusivity with
                our innovative sign language translation tool.
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <img
                src={img2}
                alt="SignSpeak app being used for accessibility"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Grid>
          </motion.div>
        </Grid>

        <Grid item container xs={12} alignItems="center" direction="column">
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={animationVariants}
            style={{ width: "100%" }}
          >
            <Typography align="center" variant="h4" gutterBottom>
              How It Works
            </Typography>
            <Typography
              align="center"
              variant="body1"
              color="textSecondary"
              paragraph
            >
              Our cutting-edge technology uses your device&apos;s camera to
              detect and interpret sign language gestures and expressions in
              real-time.
            </Typography>
            <Grid container justifyContent="center">
              <img
                src={img3}
                alt="Illustration of how SignSpeak works"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Grid>
          </motion.div>
        </Grid>

        <Grid item container xs={12} alignItems="center" direction="column">
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={animationVariants}
            style={{ width: "100%" }}
          >
            <Typography align="center" variant="h4" gutterBottom>
              Features
            </Typography>
            <Grid item container spacing={6} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography align="center" variant="h5" gutterBottom>
                  Sign Language Translation
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  color="textSecondary"
                >
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
                <Typography
                  align="center"
                  variant="body1"
                  color="textSecondary"
                >
                  Our intuitive and easy-to-use interface ensures a seamless
                  experience for users of all skill levels.
                </Typography>
                <img
                  src={img6}
                  alt="Illustration of how SignSpeak works"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "10px",
                    height: "343px",
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Grid>

        <Grid item container xs={12} alignItems="center" direction="column">
          <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={animationVariants}
            style={{ width: "100%" }}
          >
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
            <Grid container justifyContent="center">
              <img
                src={img4}
                alt="SignSpeak community event"
                style={{ maxWidth: "50%", borderRadius: "10px" }}
              />
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      <Grid></Grid>
      <ImageSlider />
      <Footer currentPath={location.pathname} />
    </>
  );
};

const Footer = ({ currentPath }) => {
  const isActive = (path) => currentPath === path;

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
          <RouterLink
            to="/team"
            style={{
              textDecoration: "none",
              color: isActive("/team") ? "#c83c4c" : "inherit",
              pointerEvents: isActive("/team") ? "none" : "auto",
              cursor: isActive("/team") ? "default" : "pointer",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            About Us
          </RouterLink>
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
          <RouterLink
            to="https://space340.com/events/921669831/arabic-sign-language-certification-course?&v=latest"
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Arsl
          </RouterLink>

          <Typography variant="body2" gutterBottom>
            <RouterLink
              to="https://en.wikipedia.org/wiki/Arab_sign-language_family"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Alphabetics
            </RouterLink>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <RouterLink
              to="https://www.wikihow.com/Count-to-100-in-American-Sign-Language"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Numbers
            </RouterLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <RouterLink
                to="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon color="primary" />
              </RouterLink>
            </Grid>
            <Grid item>
              <RouterLink
                to="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon color="primary" />
              </RouterLink>
            </Grid>
            <Grid item>
              <RouterLink
                to="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon color="primary" />
              </RouterLink>
            </Grid>
            <Grid item>
              <RouterLink
                to="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon color="primary" />
              </RouterLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
