import { Fragment } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Ligth } from "./Styles/Theme";
import Navegation from "./Components/UI/Navegation";
import Home from "./Components/Home";
import RoadMap from "./Components/Roadmap";
function App() {
  return (
    <main>
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={Ligth}>
          <Navegation />
          <Home />
          <RoadMap />
        </ThemeProvider>
      </Fragment>
    </main>
  );
}

export default App;
