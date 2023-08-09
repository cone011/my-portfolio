import Tags from "../../UI/Tags/Tags";
import classes from "./ItemProject.module.css";

const ItemProject = (props) => {
  const { project } = props;

  return (
    <div className={classes.projectCard}>
      <div className={classes.projectInfo}>
        <label className={classes.projectTitle}>{project.title}</label>
        <div className={classes.projectLinks}>
          {project.demo && (
            <a href={project.demo}>
              <div className={classes.linkButton}>
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.frontEnd && (
            <a href={project.frontEnd}>
              <div className={classes.linkButton}>
                <i class="devicon-github-original colored"></i>FrontEnd
              </div>
            </a>
          )}
          {project.backEnd && (
            <a href={project.backEnd}>
              <div className={classes.linkButton}>
                <i class="devicon-github-original colored"></i>BackEnd
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <Tags tags={project.tags} />
      </div>
      <img
        src={project.image}
        alt={project.title}
        className={classes.projectPhoto}
      />
    </div>
  );
};

export default ItemProject;
