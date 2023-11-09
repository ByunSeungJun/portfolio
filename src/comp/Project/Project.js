import '../index.css';
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import React12 from "../Project/React12";
import Java from "../Project/Java";

function Project() {
  return(
  <div>
  <div className="mebar3">
  <Link to="react1231" className="item2"> React웹사이트 개발</Link> <br /></div>
  <div className="mebar4">
  <Link to="java" className="item2"> JAVA 어플 개발 </Link> <br /></div>
  <Routes>
   <Route exact path="/" Component={React12} />
    <Route path="react1231" Component={React12} />
    <Route path="java" Component={Java} />
  </Routes>
</div>)
}

export default Project;
