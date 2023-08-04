import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import ListSkill from "../Skills/ListSkill/ListSkill";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.Body}>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <ListSkill />
      </section>
    </div>
  );
};

export default Body;
