import classes from "./Home.module.css";
import Body from "../Body/Body";
import Footer from "../UI/Footer/Footer";

const Home = () => {
  return (
    <div className={classes.home}>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
