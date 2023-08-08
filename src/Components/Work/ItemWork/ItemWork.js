import classes from "./ItemWork.module.css";

const ItemWork = (props) => {
  const { item } = props;

  return (
    <div
      className={classes.workContainer}
      id={item.idCss === "pair" ? classes["pairContainer"] : ""}
    >
      <div
        className={classes.workData}
        id={item.idCss === "pair" ? classes["pairWorkData"] : ""}
      >
        <h1 className={classes.workDataTitle}>{item.companyName}</h1>
        <h2 className={classes.workDataRole}>{`Role: ${item.role}`}</h2>
        <h2 className={classes.workDataRole}>{item.date}</h2>
      </div>
    </div>
  );
};

export default ItemWork;
