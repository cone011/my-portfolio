import { ProjectList } from "../../Utils/const";
import ProjectItem from "../Projectitem/Projectitem";
import Separator from "../UI/Separator/Separator";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <Separator />
      <label className={classes.sectionTitle}>Projects</label>
      <div>
        {ProjectList.map((item) => (
          <ProjectItem project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
