import AboutMe from "../AboutMe/AboutMe";
import ListCertificate from "../Certificate/ListCertificate/ListCertificate";
import Contact from "../Contact/Contact";
import ListProject from "../Projects/ListProjects/ListProjects";
import ListSkill from "../Skills/ListSkill/ListSkill";
import ListWork from "../Work/ListWork/ListWork";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.Body}>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <ListProject />
      </section>
      <section id="skills">
        <ListSkill />
      </section>
      <section id="certification">
        <ListCertificate />
      </section>
      <section id="work">
        <ListWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
