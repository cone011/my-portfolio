import React, { useState } from "react";
import classes from "./Header.module.css";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMovilHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo} />
      <div className={classes.menu}>
        <div className={classes.webMenu}>
          <Web />
        </div>
        <div className={classes.mobileMenu}>
          <div onClick={onOpenMovilHandler}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile onHandler={onOpenMovilHandler} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
