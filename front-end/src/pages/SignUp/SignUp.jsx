import Avatar from "@mui/material/Avatar"; // Importing the Avatar component from the Material-UI library
import Button from "@mui/material/Button"; // Importing the Button component from the Material-UI library
import TextField from "@mui/material/TextField"; // Importing the TextField component from the Material-UI library
import FormControlLabel from "@mui/material/FormControlLabel"; // Importing the FormControlLabel component from the Material-UI library
import Checkbox from "@mui/material/Checkbox"; // Importing the Checkbox component from the Material-UI library
import Grid from "@mui/material/Grid"; // Importing the Grid component from the Material-UI library
import Box from "@mui/material/Box"; // Importing the Box component from the Material-UI library
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Importing the LockOutlinedIcon component from the Material-UI library
import Typography from "@mui/material/Typography"; // Importing the Typography component from the Material-UI library
import Container from "@mui/material/Container"; // Importing the Container component from the Material-UI library
import { Link, useNavigate } from "react-router-dom"; // Importing the Link and useNavigate components from the react-router-dom library
import { Card } from "@mui/material"; // Importing the Card component from the Material-UI library

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Sign Language</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate(); // Creating a navigate function using the useNavigate hook from react-router-dom
  const handleSubmit = (event) => {
    // Creating a handleSubmit function that will be called when the form is submitted
    event.preventDefault(); // Preventing the default form submission behavior
    const data = new FormData(event.currentTarget); // Creating a new FormData object from the form data
    if (
      data.get("email") !== "" && // Checking if the email field is not empty
      data.get("password") !== "" && // Checking if the password field is not empty
      data.get("firstName") !== "" && // Checking if the firstName field is not empty
      data.get("lastName") !== "" // Checking if the lastName field is not empty
    ) {
      navigate("/"); // Navigating to the home page if all the fields are filled
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
        }}
        elevation={4}
        component={Card}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/sign-in" style={{ color: "inherit" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5, color: "inherit" }} />
    </Container>
  );
}
