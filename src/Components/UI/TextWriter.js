import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import PDF from "../../Assets/Juan_Caimen_Resume.pdf";

const TextWriter = () => {
  return (
    <div>
      <Title>Welcome to my Portafolio</Title>
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span class="firstText">
        Divertidos
        </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span class="secondText">
            Increibles
            </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span class="text-3">
            Reutilizables
            </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
      <Title />
      <Text></Text>
      <ButtonContainer>
        <a href={PDF} target="_blank">
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
  span{
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
    color:red;
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
