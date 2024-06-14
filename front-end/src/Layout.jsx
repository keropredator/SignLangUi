// eslint-disable-next-line no-unused-vars
import React from "react";
import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./pages/images/Logo.png";

const btnStyle = {
  fontFamily: "monospace",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "10px",
  color: "#08457E",
  "&:hover": {
    border: "none",
    backgroundColor: "#dfdddb",
  },
};
const activeBtnStyle = {
  ...btnStyle,
  color: "#c83c4c",
  backgroundColor: "#dfdddb",
};
const btnStyle2 = {
  fontFamily: "monospace",
  fontWeight: "bold",
  fontSize: "1rem",
  border: "none",
  borderRadius: "10px",
  transition: "0.3s",
  color: "#fff",
  backgroundColor: "#c83c4c",
  "&:hover": {
    border: "none",
    backgroundColor: "#c83c4c",
    transform: "scale(1.1)",
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
              <Box display="flex" gap={3} justifyContent="center" flexGrow={1}>
                <NavLink
                  to="/"
                  style={() => ({
                    textDecoration: "none",
                    color: "inherit",
                  })}
                >
                  <Button
                    variant="outlined"
                    sx={location.pathname === "/" ? activeBtnStyle : btnStyle}
                  >
                    Home
                  </Button>
                </NavLink>
                <NavLink
                  to="/translate"
                  style={() => ({
                    textDecoration: "none",
                    color: "inherit",
                  })}
                >
                  <Button
                    variant="outlined"
                    sx={
                      location.pathname === "/translate"
                        ? activeBtnStyle
                        : btnStyle
                    }
                  >
                    Translate
                  </Button>
                </NavLink>
                <NavLink
                  to="/team"
                  style={() => ({
                    textDecoration: "none",
                    color: "inherit",
                  })}
                >
                  <Button
                    variant="outlined"
                    sx={
                      location.pathname === "/team" ? activeBtnStyle : btnStyle
                    }
                  >
                    Team
                  </Button>
                </NavLink>
                <NavLink
                  to="/ContactUs"
                  style={() => ({
                    textDecoration: "none",
                    color: "inherit",
                  })}
                >
                  <Button
                    variant="outlined"
                    sx={
                      location.pathname === "/ContactUs"
                        ? activeBtnStyle
                        : btnStyle
                    }
                  >
                    Contact Us
                  </Button>
                </NavLink>
              </Box>
              <Link
                to="/sign-up"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="outlined" sx={{ ...btnStyle2, ml: "auto" }}>
                  Sign up
                </Button>
              </Link>
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
