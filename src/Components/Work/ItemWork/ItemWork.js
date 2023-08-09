import classes from "./ItemWork.module.css";

const ItemWork = (props) => {
  const { item } = props;

  return (
    <div
      className={classes.workContainer}
      id={item.idClass === "pair" ? classes["pairContainer"] : ""}
    >
      <div
        className={classes.workInfo}
        id={item.idClass === "pair" ? classes["pairInfo"] : ""}
      >
        <h1 className={classes.workTitle}>{item.companyName}</h1>
        <h2 className={classes.workDate}>{`Role: ${item.role}`}</h2>
        <h2 className={classes.workDate}>{item.date}</h2>
      </div>
    </div>
  );
};

export default ItemWork;
