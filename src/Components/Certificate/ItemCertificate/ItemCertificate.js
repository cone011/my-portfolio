import classes from "./ItemCertificate.module.css";

const ItemCertificate = (props) => {
  const { item } = props;

  return (
    <div className={classes.certificationCard}>
      <img
        src={item.companyLogo}
        alt={item.name}
        className={classes.certificationLogo}
      />
      <div className={classes.certificationInfo}>
        <label>{item.name}</label>
        <div className={classes.certificationDescription}>
          <p>{item.type}</p>
        </div>
        <div className={classes.certificateLink}>
          <a href={item.link}>
            <div className={classes.linkButton}>
              <i class="fi fi-rr-book-alt"></i> Diploma
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCertificate;
