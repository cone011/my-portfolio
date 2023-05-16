import {
  Section,
  ImgContainer,
  Title,
  BtnContainer,
  JoiNow,
} from "../Styles/Banner";

import img1 from "../Assets/bighead.svg";
import img2 from "../Assets/bighead-1.svg";
import img3 from "../Assets/bighead-2.svg";
import img4 from "../Assets/bighead-3.svg";
import img5 from "../Assets/bighead-4.svg";
import img6 from "../Assets/bighead-5.svg";

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
        Adquiere el curso de <br /> React
      </Title>
      <BtnContainer>
        <a href="#" target="_blank">
          <JoiNow>Adquirir</JoiNow>
        </a>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
