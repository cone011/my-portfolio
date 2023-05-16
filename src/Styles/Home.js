import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  min-heigth: ${(props) => `cal(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
    width:75%;
    min-height:80vh;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:64em){
        width:85%;
    }
    @media (max-width:48em){
        flex-direction: column-reverse;
        width:100%;
        & > *:first-child{
            width100%;
            margin-top:2rem;
        }
    }
`;

export const Box = styled.div`
  width: 50%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Rotate = keyframes`
    100%{
        transform:rotate(1turn);
    }
`;

export const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 7rem;
  img {
    width: 100%;
    height: auto;
    animation: ${Rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    heigth: 4rem;
    left: none;
    rigth: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1.5rem;
  }
`;
