import React from "react";
import classes from "./Web.module.css";

const Web = () => {
  return (
    <div className={classes.web}>
      <div className={classes.webOption}>
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#certification">
          <i class="fi fi-rr-book-alt"></i> Certifications
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className={classes.webOption}>
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
