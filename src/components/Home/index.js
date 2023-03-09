import "./index.scss";
import rocketMan from "../../assets/images/rocket.gif";
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
          Software Engineering Student
        </h1>
        <h2>University of Auckland</h2>
      </div>
      <div className="project-right">
        <div className="container-img">
          <img src={rocketMan} alt="rocket"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
