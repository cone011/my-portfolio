import styled, { keyframes } from "styled-components";
import Vector from "../Icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect, useRef } from "react";

const DrawSvg = () => {
  const valueRef = useRef(null);
  const itemLineRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = valueRef.current;
    let svg = document.getElementsByClassName("svg-path")[0];
    const length = svg.getTotalLength();
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let recorrido = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            itemLineRef.current.style.display = "none";
          } else {
            itemLineRef.current.style.display = "inline-block";
          }
        },
      },
    });
    return () => {
      if (recorrido) recorrido.kill();
    };
  }, []);

  return (
    <Fragment>
      <Item ref={itemLineRef} />
      <VectorContainer ref={valueRef}>
        <Vector />
      </VectorContainer>
    </Fragment>
  );
};

const Bounce = keyframes`
    from {
        transform: translateX(-50%) scale(0.5);
    }
    to {
        transform: translateX(-50%) scale(1);
    }
  `;

const Item = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  heigth: 1.5rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
  animation: ${Bounce} 0.5s linear infinite alternate;
  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const VectorContainer = styled.div`
  position: absolute;
  top: 0%.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 48em) {
    left: 1rem;
  }
`;

export default DrawSvg;
