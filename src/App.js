import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./comp/Home";
import Aboutme from "./comp/Aboutme/Aboutme";
import Project from "./comp/Project/Project";
import Search from "./comp/Search";
import Posts from "./comp/Posts";
import Login from "./comp/Login";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="sidebar1">
          <Link to="/Home" className="item">
            Home
          </Link>
          <br /></div>
        <div className="sidebar2">
          <Link to="/Aboutme/:변승준/:개발자" className="item">
            Aboutme
          </Link>
          <br /></div>
        <div className="sidebar3">
          <Link to="/project" className="item">
            Project
          </Link>
          <br /></div>
        <div className="sidebar4">
          <Link to="/search" className="item">
            Contest
          </Link>
          <br /></div>
        <div className="sidebar5">
          <Link to="/posts" className="item">
            Career
          </Link>
        </div>
        <div className="contents">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/Home" Component={Home} />
            <Route path="/Aboutme/:name/:developer*" Component={Aboutme} />
            <Route path="/project" Component={Project} />
            <Route path="/search" Component={Search} />
            <Route path="/posts/*" Component={Posts} />
            <Route path="/login" Component={Login} />
          </Routes></div>
      </Router>
      <div className="title">
        <h1 className='reco'><h2>변승준의 <br></br>
          PORTFOLIO</h2>성장해가는 풀스택개발자</h1>
      </div>
      
        <img src='/image/me.png' alt="Your Image" style={{ width: '10rem', height: '10rem' }} className="mepic"/>
    </div>

  );
};
export default App;
