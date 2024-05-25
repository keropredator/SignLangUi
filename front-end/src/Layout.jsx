import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import { Link, useLocation, NavLink } from "react-router-dom";
import logo from "./pages/images/Logo.png";
import { red } from "@mui/material/colors";

const btnStyle = {
  fontFamily: "monospace",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "10px",
  color: "#08457E",
  "&:hover": {
    border: "none",
    backgroundColor: red[50],
    color: red[300],
  },
};

const Layout = ({ children }) => {
  const location = useLocation();
  if (["/sign-up", "/sign-in"].includes(location.pathname)) {
    return <>{children}</>;
  }
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
                  <Button variant="outlined" sx={btnStyle}>
                    Home
                  </Button>
                </Link>
                <NavLink to="/translate">
                  <Button variant="outlined" sx={btnStyle}>
                    Translate
                  </Button>
                </NavLink>
                <Link
                  to="/team"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="outlined" sx={btnStyle}>
                    Team
                  </Button>
                </Link>
                <Link
                  to="/sign-up"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      border: "none",
                      borderRadius: "10px",
                      color: "#08457E",
                      "&:hover": {
                        border: "none",
                        backgroundColor: red[50],
                        color: red[300],
                      },
                    }}
                  >
                    Sign up
                  </Button>
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
