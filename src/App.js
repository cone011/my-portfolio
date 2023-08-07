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
import { TYPE_ROAD_MAP } from "./Components/utils/const";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <main>
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={Ligth}>
          <Navegation />
          <Home />
          <AboutMe />
          <RoadMap titleRoadMap={TYPE_ROAD_MAP.WORK_EXPERIENCE} />
          <Technologies />
          <RoadMap titleRoadMap={TYPE_ROAD_MAP.ACADEMY_EXPERIENCE} />
          <Projects />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </Fragment>
    </main>
  );
}

export default App;
