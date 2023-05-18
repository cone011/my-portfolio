import styled from "styled-components";
import { Dark } from "../Styles/Theme";
import { lazy, Suspense } from "react";
import Loading from "./UI/Loading";
import { ABOUT_ME } from "./utils/const";

const Carrousel = lazy(() => import("../Components/UI/Carrousel/Carrousel"));
const AboutMe = () => {
  return (
    <Section id={ABOUT_ME.path}>
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carrousel />
          </Suspense>
        </Box>
        <Box>
          <Title>Bienvenido a mi portafolio</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            eveniet saepe in voluptate sit odio. Eligendi ipsa aspernatur
            voluptatem nesciunt suscipit deleniti corporis! Voluptas numquam
            veritatis commodi. Adipisci, ducimus voluptatum?
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width; 100%;
  background-color: ${(props) => props.theme.text};
  display:flex;
  justify-content:center;
  align-items: center;
  position: relative;
  overflow:hidden;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size:${(props) => props.theme.fontxxl};
  text-transform: capital;
  color:${(props) => props.theme.body};
  alin-self:flex-start;
  width:80%;
  margin 0 auto;
  @media(max-width:64em){
    width:100%;
    text-align:center;
  }
  @media(max-width:40em){
    font-size:${(props) => props.theme.fontxl};
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color:${(props) => props.theme.body};
  align-self:flex-start;
  width:80%;
  margin 1rem auto;
  font-weight:400;
  @media(max-width:64em){
    width:100%;
    text-align:center;
    font-size:${(props) => props.theme.fontmd};
  }
  @media(max-width:40em){
    font-size:${(props) => props.theme.fontmd};
  }
  @media(max-width:30em){
    font-size:${(props) => props.theme.fontsm}
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd}
  color:${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self:flex-start;
  width:80%;
  margin:1rem auto;
  font-weigth:400;
  @media(max-width:64em){
    width:100%;
    text-align:center;
    font-size:${(props) => props.theme.fontsm};
  }
  @media(max-width:40em){
    font-size:${(props) => props.theme.fontsm};
  }
  @media(max-width:30em){
    font-size:${(props) => props.theme.fontxs};
  }
`;

export default AboutMe;
