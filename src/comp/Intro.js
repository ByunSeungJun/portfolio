import Resum from "./Resum";
import Skills from "./Skills";
import '../index.css';
const Intro = [
    {
        className:"mebar1",
      tab:"이력서",
      content: <Resum></Resum>,
    },
    {
        className:"mebar2",
      tab: "SKILLS",
      content: <Skills></Skills>,
    },
  ];

  export default Intro;