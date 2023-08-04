import SkillCard from "../SkillCard/SkillCard";
import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  const { item } = props;
  const { type, list } = item;
  return (
    <div className={classes.skillSection}>
      <label className={classes.skillSectionTitle}>{type}</label>
      <div className={classes.skillsList}>
        {list.map((item) => (
          <SkillCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
