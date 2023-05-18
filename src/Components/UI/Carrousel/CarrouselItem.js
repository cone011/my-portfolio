import { SwiperSlide } from "swiper/react";

const CarrouselItem = (props) => {
  const { image } = props;
  return (
    <SwiperSlide>
      <img width={500} height={400} src={image} alt="ntf" />
    </SwiperSlide>
  );
};

export default CarrouselItem;
