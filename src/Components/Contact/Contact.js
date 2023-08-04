import classes from "./Contact.module.css";
import Container from "../UI/Container/Container";
import SocialContact from "../UI/SocialContact/SocialContact";
import Separator from "../UI/Separator/Separator";

const Contact = () => {
  return (
    <Container customCSS={classes.contact}>
      <Separator />
      <label className={classes.sectionTitle}>Contact</label>
      <div className={classes.contactCointaner}>
        <div>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
