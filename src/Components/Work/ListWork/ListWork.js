import { WorkExpirience } from "../../../Utils/const";
import Separator from "../../UI/Separator/Separator";
import ItemWork from "../ItemWork/ItemWork";
import classes from "./ListWork.module.css";

const ListWork = () => {
  return (
    <div className={classes.works}>
      <Separator />
      <label className={classes.workTitle}>Work Experience</label>
      <div className={classes.vertical} />
      {WorkExpirience.map((item) => (
        <ItemWork item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListWork;
