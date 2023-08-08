import Separator from "../../UI/Separator/Separator";
import classes from "./ListSkill.module.css";
import { SkillsData } from "../../../Utils/const";
import SkillItem from "../SkillItem/SkillItem";

const ListSkill = () => {
  return (
    <div className={classes.skills}>
      <Separator />
      <label className={classes.skillsTitle}>Skills</label>
      {SkillsData.map((item) => (
        <SkillItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListSkill;
