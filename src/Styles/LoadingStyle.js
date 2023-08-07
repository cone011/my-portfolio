import styled, { keyframes } from "styled-components";

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 150;
  display: flex;
  justify-content: center;
  aligin-items: center;
`;

export const Spin = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
`;

export const Spinner = styled.div`
  margint-top: 1rem;
  border: 4px solid #222;
  border-radius: 50%;
  border-top: 4px solid #999;
  width: 3rem;
  height: 3rem;
  -webkit-animation: ${Spin} 1s linear infinite;
`;
