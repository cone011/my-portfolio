import { Fragment } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Ligth } from "./Styles/Theme";
import Navegation from "./Components/UI/Navegation";
import Home from "./Components/Home";
import RoadMap from "./Components/Roadmap";
import Footer from "./Components/UI/Footer";
import ScrollToTop from "./Components/UI/ScrollToTop";
import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies/Technologies";
function App() {
  return (
    <main>
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={Ligth}>
          <Navegation />
          <Home />
          <AboutMe />
          <RoadMap titleRoadMap={"Experiencia Loboral"} />
          <Technologies />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </Fragment>
    </main>
  );
}

export default App;
