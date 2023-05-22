import styled from "styled-components";
import { TECHNOLOGY, TYPE_SHOW_TECH } from "../utils/const";
import { useState } from "react";
import TechnologiesCarrousel from "../TechnologiesCarrousel/TechnologiesCarrousel";
import TechnologiesRow from "../TechnologiesRow/TechnologiesRow";

const Technology = () => {
  const [selectedType, setSelectedType] = useState(TYPE_SHOW_TECH.CARROUSEL);

  const onClickCarrousel = () => {
    setSelectedType(TYPE_SHOW_TECH.CARROUSEL);
  };

  const onClickRow = () => {
    setSelectedType(TYPE_SHOW_TECH.ROW);
  };

  return (
    <Section id={TECHNOLOGY.path}>
      {selectedType === TYPE_SHOW_TECH.CARROUSEL && <TechnologiesCarrousel />}
      {selectedType === TYPE_SHOW_TECH.ROW && <TechnologiesRow />}
      <ButtonContainer>
        <Button onClick={onClickCarrousel}>Carrousel</Button>
        <Button onClick={onClickRow}>Row</Button>
      </ButtonContainer>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  padding: 20px;
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
    padding: 20px;
  }
`;

const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  margin-left: 30px;
  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }
  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

export default Technology;
