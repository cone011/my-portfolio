import classes from "./AboutMe.module.css";
import imgBack from "../assets/coding.png";
import SocialContact from "../UI/SocialContact/SocialContact";

const AboutMe = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutTop}>
        <div className={classes.aboutInfo}>
          Hello There ✋,I am,
          <br />
          <span className={classes.infoName}>Juan Caimen</span>
          <br />I have experience working with Azure Cloud Platform.
        </div>
        <div className={classes.aboutPhoto}>
          <img src={imgBack} alt="img" className={classes.picture} />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default AboutMe;
