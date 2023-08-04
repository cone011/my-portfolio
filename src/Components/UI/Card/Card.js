import classes from "./Card.module.css";

const Card = (props) => {
  const { customCSS, children } = props;

  return (
    <div className={customCSS ? `${customCSS}` : classes.card}>{children}</div>
  );
};

export default Card;
