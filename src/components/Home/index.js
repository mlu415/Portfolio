import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          {/* I'm */}
          {/* <img src={LogoS} alt="name" /> */}
          I'm Michelle
          <br />
          Web Developer
        </h1>
        <h2>Software Engineering Student</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
