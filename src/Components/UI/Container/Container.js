import classes from "./Container.module.css";

const Container = (props) => {
  const { customCSS, children } = props;

  return (
    <main className={customCSS ? `${customCSS}` : classes.layout}>
      {children}
    </main>
  );
};

export default Container;
