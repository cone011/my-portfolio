import styled from "styled-components";
import VIDEO from "../../Assets/Home Video.mp4";

const CoverVideo = () => {
  return (
    <VideContainer>
      <video src={VIDEO} type="video/mp4" autoPlay muted loop />
    </VideContainer>
  );
};

const VideContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
    @media (max-width: 64em) {
      min-width: 40vh;
    }
  }
`;

export default CoverVideo;
