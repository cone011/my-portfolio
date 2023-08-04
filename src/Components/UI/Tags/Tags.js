import classes from "./Tags.module.css";

const Tags = (props) => {
  const { tags } = props;
  return (
    <div className={classes.projectTags}>
      {tags.map((item) => (
        <label className={classes.tag}>{item}</label>
      ))}
    </div>
  );
};

export default Tags;
