import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./pages/images/Logo.png";

const Layout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: 40,
                    mixBlendMode: "multiply",
                  }}
                />
              </Link>
              <Box display="flex" gap={3}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined">Home</Button>
                </Link>
                <Link
                  to="/translate"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined">Translate</Button>
                </Link>
                <Link
                  to="/team"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined">Team</Button>
                </Link>
                <Link
                  to="/sign-up"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined">Sign up</Button>
                </Link>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
export default Layout;
