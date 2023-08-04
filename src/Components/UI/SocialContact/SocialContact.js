import classes from "./SocialContact.module.css";
import { SocialData } from "../../../Utils/const";

const SocialContact = () => {
  return (
    <div className={classes.socialContact}>
      {SocialData.map((item) => (
        <a href={item.link} key={item.id}>
          <div className={classes.socialContactContainer}>
            <img
              src={item.icon}
              alt={item.id}
              className={classes.socialIcons}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialContact;
