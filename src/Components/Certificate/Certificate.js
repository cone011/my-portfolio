import classes from "./Certificate.module.css";
import { CertificateData } from "../../Utils/const";
import Container from "../UI/Container/Container";
import Separator from "../UI/Separator/Separator";

const Certificate = () => {
  return (
    <Container customCSS={classes.certificate}>
      <Separator />
      <label className={classes.certificateTitle}>Certificate</label>
      <div className={classes.certificateList}></div>
    </Container>
  );
};

export default Certificate;
