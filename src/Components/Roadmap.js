import styled from "styled-components";
import DrawSvg from "./UI/DrawSvg";
import RoadMapItem from "./RoadMapItems";
import {
  ROAD_MAP_ACADEMY,
  ROAD_MAP_WORK,
  TYPE_ROAD_MAP,
  WORK_EXPERIENCE,
  ACADEMY_EXPERIENCE,
} from "./utils/const";

const RoadMap = (props) => {
  const { titleRoadMap } = props;
  if (titleRoadMap === TYPE_ROAD_MAP.WORK_EXPERIENCE) {
    return (
      <Section id={ROAD_MAP_WORK.path}>
        <Title>{titleRoadMap}</Title>
        <Container>
          <SvgContainer>
            <DrawSvg />
          </SvgContainer>
          <Items>
            {WORK_EXPERIENCE.map((item, index) => (
              <RoadMapItem
                key={index}
                title={item.companyName}
                text={item.role}
              />
            ))}
          </Items>
        </Container>
      </Section>
    );
  }

  if (titleRoadMap === TYPE_ROAD_MAP.ACADEMY_EXPERIENCE) {
    return (
      <Section id={ROAD_MAP_ACADEMY.path}>
        <Title>{titleRoadMap}</Title>
        <Container>
          <SvgContainer>
            <DrawSvg />
          </SvgContainer>
          <Items>
            {ACADEMY_EXPERIENCE.map((item, index) => (
              <RoadMapItem
                key={index}
                title={item.name}
                text={item.institucion}
              />
            ))}
          </Items>
        </Container>
      </Section>
    );
  }
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
