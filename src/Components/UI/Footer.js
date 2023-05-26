import styled from "styled-components";
import SocialMedia from "../../Components/Icons/SocialMedia";
import Banner from "./Banner";
import { FACEBOOK, LINKEDIN, TWITTER } from "../utils/SocialMedias";

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <IconList>
            <a href="#" target="_blank">
              <SocialMedia typeIcon={FACEBOOK.name} />
            </a>
            <a href={TWITTER.link} target="_blank" rel="noreferrer">
              <SocialMedia typeIcon={TWITTER.name} />
            </a>
            <a href={LINKEDIN.link} target="_blank" rel="noreferrer">
              <SocialMedia typeIcon={LINKEDIN.name} />
            </a>
          </IconList>
        </Left>
        <MenuItems></MenuItems>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color; ${(props) => props.theme.body}
  position: relative;
  color: ${(props) => props.theme.text};
  display:flex;
  flex-direction:column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontlg};
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 90%;
    h1 {
      font-size: ${(propss) => propss.theme.fontxxxl};
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.div`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media (max-width: 48em) {
    display: none;
  }
`;

export default Footer;
