import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="Logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="tests" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
        onClick={"/about"}
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="project-link"
        to="/project"
        onClick={"/about"}
      >
        <FontAwesomeIcon icon={faPuzzlePiece} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="https://github.com/mlu415" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/michelle-lumi173/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
