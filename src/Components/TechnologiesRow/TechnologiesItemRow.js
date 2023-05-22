import styled from "styled-components";
import { TYPE_SHOW_CASE } from "../utils/const";
import RatingImg from "../../Assets/Rating.svg";

const TechnologiesItemRow = (props) => {
  const { img, number, name, rating, rowRef } = props;
  let play = (event) => {
    rowRef.current.style.animationPlayState = TYPE_SHOW_CASE.RUNNING;
  };
  let pause = (event) => {
    rowRef.current.style.animationPlayState = TYPE_SHOW_CASE.PAUSED;
  };

  return (
    <ImgContainer
      onMouseOver={(event) => pause(event)}
      onMouseOut={(event) => play(event)}
    >
      <img width={500} height={400} src={img} alt={name} />
      <Details>
        <div>
          <span>{name}</span>
          <br />
          <h1># {number}</h1>
        </div>
        <div>
          <span>Rating</span>
          <Rating>
            <img width={200} height={200} src={RatingImg} alt="rating" />
            <h1>{Number(rating).toFixed(0)}</h1>
          </Rating>
        </div>
      </Details>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
  img {
    width: 100%;
    height: 75%;
  }
`;

const Details = styled.div`
  ddisplay: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rbga(${props.theme.bodyRgba},0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 1rem;
    height: auto;
  }
`;

export default TechnologiesItemRow;
