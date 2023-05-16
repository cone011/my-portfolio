import { Buttons } from "../../Styles/Button";

const Button = (props) => {
  const { text } = props;
  return <Buttons>{text}</Buttons>;
};

export default Button;
