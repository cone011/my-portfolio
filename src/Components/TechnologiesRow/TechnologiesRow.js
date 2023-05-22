import styled, { keyframes } from "styled-components";
import { useRef } from "react";
import { TECHNOLOGY, TECH_EXPERIENCE } from "../utils/const";
import TechnologiesItemRow from "./TechnologiesItemRow";

const TechnologiesRow = () => {
  const upperRef = useRef(null);
  const downRef = useRef(null);
  const middle = Math.floor(TECH_EXPERIENCE.length / 2);
  return (
    <Section id={TECHNOLOGY.path}>
      <Row direction="none" ref={upperRef}>
        {TECH_EXPERIENCE.slice(0, middle).map((item) => (
          <TechnologiesItemRow
            key={item.id}
            name={item.name}
            img={item.image}
            number={item.id}
            rating={item.rating}
            rowRef={upperRef}
          />
        ))}
      </Row>
      <Row direction="reverse" ref={downRef}>
        {TECH_EXPERIENCE.slice(middle).map((item) => (
          <TechnologiesItemRow
            key={item.id}
            name={item.name}
            img={item.image}
            number={item.id}
            rating={item.rating}
            rowRef={downRef}
          />
        ))}
      </Row>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  diplay: flex;
  flex-direcion: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  & > *:first-child {
    animation-duration: 20s;
    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const Move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${Move} linear infinite ${(props) => props.direction};
`;

export default TechnologiesRow;
