import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Team from "./pages/Team/Team";
import AboutUs from "./pages/AboutUs/AboutUs";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
            <Route path="/about-us" Component={AboutUs} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
