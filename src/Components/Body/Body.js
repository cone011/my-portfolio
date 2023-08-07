import AboutMe from "../AboutMe/AboutMe";
import ListCertificate from "../Certificate/ListCertificate/ListCertificate";
import Contact from "../Contact/Contact";
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
      <section id="certification">
        <ListCertificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
