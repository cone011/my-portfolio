import Card from "../../UI/Card/Card";
import classes from "./SkillCard.module.css";

const SkillCard = (props) => {
  const { item } = props;

  return (
    <Card customCSS={classes.skillCard}>
      <div className={classes.skillIcon}>{item.icon}</div>
      <label className={classes.skillName}>{item.name}</label>
    </Card>
  );
};

export default SkillCard;
