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
            align="center"
            variant="body1"
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
    </Grid>
  );
};

export default Home;
