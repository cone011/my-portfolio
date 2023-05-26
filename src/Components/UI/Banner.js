import {
  Section,
  ImgContainer,
  Title,
  BtnContainer,
  JoiNow,
} from "../../Styles/Banner";

import REACT from "../../Assets/Technologies/React.svg";
import NODEJS from "../../Assets/Technologies/NodeJS.svg";
import SOCKET from "../../Assets/Technologies/SocketIO.svg";
import MONGODB from "../../Assets/Technologies/MongoDB.svg";
import GIT from "../../Assets/Technologies/Git.svg";
import JAVASCRIPT from "../../Assets/Technologies/JavaScript.svg";
import { GITHUB } from "../utils/SocialMedias";

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img width={500} height={400} src={REACT} alt="-" />
        <img width={500} height={400} src={NODEJS} alt="-" />
        <img width={500} height={400} src={SOCKET} alt="-" />
        <img width={500} height={400} src={MONGODB} alt="-" />
        <img width={500} height={400} src={GIT} alt="-" />
        <img width={500} height={400} src={JAVASCRIPT} alt="-" />
      </ImgContainer>
      <Title>
        Portfolio <br /> Made in React
      </Title>
      <BtnContainer>
        <a href={GITHUB.link} target="_blank" rel="noreferrer">
          <JoiNow>GitHub</JoiNow>
        </a>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
