import unihackImg from "../../assets/images/Unihack.png";
import xeroImg from "../../assets/images/Xero.png";
import gamificationGif from "../../assets/images/Gamification.gif";

const projectData = [
  {
    title: "UNIHACK",
    tech: ["JavaScript", "React", "Next.js", "Postgres", "Docker"],
    description:
      "UNIHACK's team management app for over 400 participants. This included Discord & Twilio Integration, DB schema updates & migration, and User Reports. No source code for this one sorry!",
    image: unihackImg,
    sourceCode: "",
    demo: "https://manage.unihack.net/",
  },

  {
    title: "Xero",
    tech: ["C#", "React", "Next.js", "TypeScript", "AWS", "Docker"],
    description:
      "I was an intern at Xero on the XPM team, working on Job Manager Monolith, API calls and flags for user usage metrics, Front end bug fixes and updates. No source code for this one sorry!",
    image: xeroImg,
    sourceCode: "",
    demo: "",
  },
  {
    title: "Gamification of Behavioural Experiments",
    tech: ["MongoDb", "Express", "Node.js", "TypeScript", "React"],
    description:
      "This project was created for the University of Auckland Psychology department to evaluate human learning.",
    image: gamificationGif,
    sourceCode:
      "https://github.com/mlu415/Gamification_Behavioural_Experiments_Reupload",
    demo: "",
  },
];

export default projectData;
