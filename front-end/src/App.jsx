import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Team from "./pages/Team/Team";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const darkTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial",`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  // BG color of the app
  palette: {
    background: {
      default: "#ebebeb",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/translate" Component={Translate} />
            <Route path="/team" Component={Team} />
            <Route path="/sign-up" Component={SignUp} />
            <Route path="/sign-in" Component={SignIn} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
