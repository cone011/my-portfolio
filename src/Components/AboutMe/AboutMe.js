import classes from "./AboutMe.module.css";
import imgBack from "../assets/coding.png";
import SocialContact from "../UI/SocialContact/SocialContact";
import PDF from "../assets/Juan_Caimen_Resume_06062023.pdf";

const AboutMe = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutTop}>
        <div className={classes.aboutInfo}>
          Hello There ✋ and Welcome to my Portofolio,
          <br />
          <span className={classes.infoName}>I am Juan Caimen</span>
          <br />I have experience working as a FullStack Developer.
        </div>
        <div className={classes.aboutPhoto}>
          <img src={imgBack} alt="img" className={classes.picture} />
        </div>
      </div>
      <div className={classes.buttonCv}>
        <a href={PDF} rel="noreferrer" download="Juan Resume" target="_blank">
          <button>
            <i class="fi fi-rr-angle-down"></i> Download My CV
          </button>
        </a>
      </div>
      <SocialContact />
    </div>
  );
};

export default AboutMe;
