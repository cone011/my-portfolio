import classes from "./ListCertificate.module.css";
import { CertificateData } from "../../../Utils/const";
import Container from "../../UI/Container/Container";
import Separator from "../../UI/Separator/Separator";
import ItemCertificate from "../ItemCertificate/ItemCertificate";

const ListCertificate = () => {
  return (
    <Container customCSS={classes.certificates}>
      <Separator />
      <label className={classes.certificatesTitle}>Certificate</label>
      <div className={classes.certificatesList}>
        {CertificateData.map((item) => (
          <ItemCertificate item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default ListCertificate;
