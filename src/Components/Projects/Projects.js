import styled from "styled-components";
import { lazy, Suspense, useState } from "react";
import Loading from "../UI/Loading";
import { TYPE_CARROUSEL, PROJECTS_LIST } from "../utils/const";

const Carrousel = lazy(() => import("../UI/Carrousel/Carrousel"));

const Projects = () => {
  const [currentValue, setCurrentValue] = useState(PROJECTS_LIST[0]);

  const onReturnProjectData = (data) => {
    setCurrentValue(data);
  };

  return (
    <Section id="projects">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carrousel
              typeCarrousel={TYPE_CARROUSEL.PROJECTS}
              listProject={PROJECTS_LIST}
              onReturnProjectData={onReturnProjectData}
            />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <Title>{currentValue.name}</Title>
            <SubText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur eveniet saepe in voluptate sit odio. Eligendi ipsa
              aspernatur voluptatem nesciunt suscipit deleniti corporis!
              Voluptas numquam veritatis commodi. Adipisci, ducimus voluptatum?
            </SubText>
            <SutTextLight>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae dolores quae excepturi labore asperiores animi quasi eos
              reiciendis quidem maxime ipsa rerum beatae, soluta repudiandae
              obcaecati voluptatum eligendi sint ea!
            </SutTextLight>
          </Suspense>
        </Box>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  @media (man-width: 40em) {
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
  color: black;
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

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: black;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SutTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: black;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

export default Projects;
