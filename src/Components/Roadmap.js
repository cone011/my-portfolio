import styled from "styled-components";
import DrawSvg from "./UI/DrawSvg";
import RoadMapItem from "./RoadMapItems";
import { WORK_EXPERIENCE } from "./utils/const";

const RoadMap = (props) => {
  const { titleRoadMap } = props;
  return (
    <Section id="roadmap">
      <Title>{titleRoadMap}</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          {WORK_EXPERIENCE.map((item) => (
            <RoadMapItem title={item.companyName} text={item.role} />
          ))}
          {/* <RoadMapItem />
          <RoadMapItem />
          <RoadMapItem />
          <RoadMapItem />
          <RoadMapItem /> */}
        </Items>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};
    width: fit-content;
    @media (max-widt: 40em){
        font-size: ${(props) => props.theme.fontxl}
    }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 48em) {
    width: 90%;
  }
  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

export default RoadMap;
