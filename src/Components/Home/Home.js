import classes from "./Home.module.css";
import Body from "../Body/Body";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";

const Home = () => {
  return (
    <div className={classes.home}>
      <div>
        <Header />
      </div>
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
