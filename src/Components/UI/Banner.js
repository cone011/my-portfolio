import {
  Section,
  ImgContainer,
  Title,
  BtnContainer,
  JoiNow,
} from "../../Styles/Banner";

import img1 from "../../Assets/Technologies/React.svg";
import img2 from "../../Assets/Technologies/NodeJS.svg";
import img3 from "../../Assets/Technologies/SocketIO.svg";
import img4 from "../../Assets/Technologies/MongoDB.svg";
import img5 from "../../Assets/Technologies/Git.svg";
import img6 from "../../Assets/Technologies/JavaScript.svg";

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img width={500} height={400} src={img1} alt="-" />
        <img width={500} height={400} src={img2} alt="-" />
        <img width={500} height={400} src={img3} alt="-" />
        <img width={500} height={400} src={img4} alt="-" />
        <img width={500} height={400} src={img5} alt="-" />
        <img width={500} height={400} src={img6} alt="-" />
      </ImgContainer>
      <Title>
        Portfolio <br /> Made in React
      </Title>
      <BtnContainer>
        <a href="#" target="_blank">
          <JoiNow>GitHub</JoiNow>
        </a>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
