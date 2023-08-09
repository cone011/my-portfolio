import { ProjectList } from "../../../Utils/const";
import Separator from "../../UI/Separator/Separator";
import classes from "./ListProjects.module.css";
import ItemProject from "../ItemProject/ItemProject";

const ListProject = () => {
  return (
    <div className={classes.projects}>
      <Separator />
      <label className={classes.sectionTitle}>Projects</label>
      <div>
        {ProjectList.map((item) => (
          <ItemProject project={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProject;
