import styled from "styled-components";
import Arrow from "../../../Assets/Arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import Javascript from "../../../Assets/Technologies/JavaScript.svg";
import ReactJS from "../../../Assets/Technologies/React.svg";
import { TYPE_CARROUSEL } from "../../utils/const";

const Carrousel = (props) => {
  const { typeCarrousel, listProject, onReturnProjectData } = props;

  const onChangeProjectData = (data) => {
    const { activeIndex } = data;
    const currentValue = listProject[activeIndex];
    onReturnProjectData(currentValue);
  };

  if (typeCarrousel === TYPE_CARROUSEL.INITIAL) {
    return (
      <Container>
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[
            EffectCards,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          navigation={true}
          pagination={{ type: "fraction" }}
          scrollbar={{ draggable: true }}
          effect={"cards"}
        >
          <SwiperSlide>
            <img width={500} height={400} src={Javascript} alt="ntf" />
          </SwiperSlide>
          <SwiperSlide>
            <img width={500} height={400} src={Javascript} alt="ntf" />
          </SwiperSlide>
          <SwiperSlide>
            <img width={500} height={400} src={Javascript} alt="ntf" />
          </SwiperSlide>
        </Swiper>
      </Container>
    );
  }

  if (typeCarrousel === TYPE_CARROUSEL.TECHNOLOGY) {
    return (
      <Container>
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[
            EffectCards,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          navigation={true}
          pagination={{ type: "fraction" }}
          scrollbar={{ draggable: true }}
          effect={"cards"}
          onSlideChange={onChangeProjectData}
        >
          {listProject.map((item) => (
            <SwiperSlide key={item.id}>
              <img width={500} height={400} src={item.image} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  }

  if (typeCarrousel === TYPE_CARROUSEL.PROJECTS) {
    return (
      <Container>
        <Swiper
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          modules={[
            EffectCards,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          navigation={true}
          pagination={{ type: "fraction" }}
          scrollbar={{ draggable: true }}
          effect={"cards"}
          onSlideChange={onChangeProjectData}
        >
          {listProject.map((item) => (
            <SwiperSlide key={item.id}>
              <img width={500} height={400} src={ReactJS} alt="ntf" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  }
};

const Container = styled.div`
  width: 25vw;
  height: 70vh;
  @media (max-width: 70em) {
    height: 60vh;
    padding: 15px 0;
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 60vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 80vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

export default Carrousel;
