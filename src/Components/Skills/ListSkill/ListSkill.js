import Container from "../../UI/Container/Container";
import Separator from "../../UI/Separator/Separator";
import classes from "./ListSkill.module.css";
import { SkillsData } from "../../../Utils/const";
import SkillItem from "../SkillItem/SkillItem";

const ListSkill = () => {
  return (
    <div className={classes.skills}>
      <Separator />
      <label className={classes.skillsTitle}>Skills</label>
      <Container>
        {SkillsData.map((item) => (
          <SkillItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default ListSkill;
