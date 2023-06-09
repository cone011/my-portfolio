import styled from "styled-components";
import { lazy, Suspense, useState } from "react";
import { TECH_EXPERIENCE, TYPE_CARROUSEL } from "../utils/const";
import Loading from "../UI/Loading";

const Carrousel = lazy(() => import("../UI/Carrousel/Carrousel"));

const TechnologiesCarrousel = () => {
  const [currentValue, setCurrentValue] = useState(TECH_EXPERIENCE[0]);

  const onReturnProjectData = (data) => {
    setCurrentValue(data);
  };

  return (
    <Section id="tech">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carrousel
              typeCarrousel={TYPE_CARROUSEL.TECHNOLOGY}
              listProject={TECH_EXPERIENCE}
              onReturnProjectData={onReturnProjectData}
            />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <Title>{currentValue.name}</Title>
            <SubText>Knowledge %</SubText>
            <SutTextLight>
              <Bar>
                <BarItem
                  style={{
                    width: `${currentValue.rating}%`,
                    backgroundColor: "#04AA6D",
                  }}
                >
                  {`${currentValue.rating} %`}
                </BarItem>
              </Bar>
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
  background-color: ${(props) => props.theme.text};
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

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Bar = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 4px;
`;

const BarItem = styled.div`
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  border-radius: 3px;
`;

const SutTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
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

export default TechnologiesCarrousel;
