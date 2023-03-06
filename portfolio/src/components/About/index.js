import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>

        <p>
          Im studying software engineering at the University of Auckland,
          graduating in July 2023!
        </p>
        <p>
          Im a highly ambitious, quick learner with an extroverted personality.
          I love all things puzzle related! The tougher the problem the more
          rewarding it is to solve{" "}
          <FontAwesomeIcon icon="fa-duotone fa-puzzle-piece" />
        </p>
        <p>
          In my free time, I enjoy coding, homebrewing, and hiking, as well as
          participating in events such as the Wonder Project, which brings STEM
          education to local schools.
        </p>
      </div>
    </div>
  );
};

export default About;
