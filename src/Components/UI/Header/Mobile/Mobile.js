import classes from "./Mobile.module.css";

const Mobile = (props) => {
  const { onHandler } = props;
  return (
    <div className={classes.mobile}>
      <div className={classes.closeIcon} onClick={onHandler}>
        <i class="fi-rr-cross-circle" />
      </div>
      <div className={classes.mobileOption}>
        <a href="#projects" onClick={onHandler}>
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className={classes.mobileOption}>
        <a href="#skills" onClick={onHandler}>
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className={classes.mobileOption}>
        <a href="#work" onClick={onHandler}>
          <i class="fi-rr-briefcase option-icon"></i>Certifications
        </a>
      </div>
      <div className={classes.mobileOption}>
        <a href="#contact" onClick={onHandler}>
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Mobile;
