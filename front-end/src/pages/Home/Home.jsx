import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        p: 3,
      }}
    >
      <Grid
        item
        container
        justifyContent="center"
        gap={3}
        xs={12}
        sx={{
          p: 3,
        }}
      >
        <Typography
          align="center"
          component="h1"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Sign Language Learning
        </Typography>
        <Typography align="center" variant="h5" color="textSecondary" paragraph>
          Learn and practice sign language with interactive tutorials and
          videos.
        </Typography>
        <Link
          to="/translate"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Button variant="contained" color="primary" fullWidth>
            Get Started
          </Button>
        </Link>
      </Grid>

      <Grid item container xs={12} spacing={12}>
        <Grid item container xs={12} md={6} justifyContent="center">
          <Typography align="center" variant="h4" gutterBottom>
            Video Tutorials
          </Typography>
          <Typography align="center" variant="body1" color="textSecondary">
            Watch our video tutorials to see real-life examples of sign language
            in action.
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center">
          <Typography align="center" variant="h4" gutterBottom>
            Interactive Lessons
          </Typography>
          <Typography align="center" variant="body1" color="textSecondary">
            Our lessons are designed to be interactive and engaging, helping you
            learn sign language effectively.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container xs={12} direction="column" alignItems="center">
        <Typography align="center" variant="h6" gutterBottom>
          Sign Language Website
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          color="textSecondary"
          component="p"
        >
          Making sign language accessible to everyone.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
