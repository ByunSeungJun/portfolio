import '../index.css';
import { Routes, Route, Link } from "react-router-dom";
import Resum from "./Resum";
import Skills from "./Skills";
import Home from '../Home';
const Aboutme = () => {
  return (
    <div>
      <div className="mebar1">
      <Link to="resum" className="item2"> 이력서</Link> <br /></div>
      <div className="mebar2">
      <Link to="skills" className="item2"> Skills </Link> <br /></div>
      <Routes>
       <Route exact path="/" Component={Resum} />
        <Route path="resum" Component={Resum} />
        <Route path="skills" Component={Skills} />
      </Routes>
    </div>
  );
};

export default Aboutme;
