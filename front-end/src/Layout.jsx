import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Grid container gap={3}>
              <Button variant="outlined">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  to="/translate"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Translate
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  to="/team"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Team
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  to="/about-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </Button>
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
