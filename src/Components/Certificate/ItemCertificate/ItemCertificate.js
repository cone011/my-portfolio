import classes from "./ItemCertificate.module.css";

const ItemCertificate = (props) => {
  const { item } = props;

  return (
    <div className={classes.certificationCard}>
      <img
        src={item.companyLogo}
        alt={item.company}
        className={classes.certificationLogo}
      />
      <div className={classes.certificationInfo}>
        <label>{item.company}</label>
        <div className={classes.certificationDescription}>
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCertificate;
