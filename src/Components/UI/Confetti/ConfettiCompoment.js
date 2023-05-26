import Confetti from "react-confetti";
import { useWindowSizes } from "react-use-window-sizes";

const ConfettiCompoment = () => {
  const { width, height } = useWindowSizes();
  return <Confetti numberOfPieces={300} width={width} height={height} />;
};

export default ConfettiCompoment;
