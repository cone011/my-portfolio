import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import PDF from "../../Assets/Juan_Caimen_Resume.pdf";

const TextWriter = () => {
  return (
    <div>
      <Title>
        Welcome to my Portafolio
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span class="firstText">
                I am Juan, Nice to meet you
              </span>`
              )
              .pauseFor(500)
              .deleteAll()
              .typeString(
                `<span class="secondText">
              I am Fullstack Developer
            </span>`
              )
              .pauseFor(500)
              .deleteAll()
              .typeString(
                `<span class="thridText">
              Please Take a look around
            </span>`
              )
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Text></Text>
      <ButtonContainer>
        <a href={PDF}>
          <Button text="Descarga mi CV" />
        </a>
      </ButtonContainer>
    </div>
  );
};

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  .span{
    width:20%;
    text-transform: uppercase;
    font-family; "Akaya Telivigala";
    cursive;
  }
  .firstText{
    color:green;
  }
  .secondText{
    color:orange;
  }
  .thridText{
    color:blue;
  }
  @media(max-width: 48em){
    align-self: center;
    text-align: center;
  }
  @media(max-width: 40em){
    width: 90%
  }
`;

const Text = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.text}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: flex-start;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;

export default TextWriter;
