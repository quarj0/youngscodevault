import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaPython,
  FaLinux,
  FaReact,
  FaGit,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="text-center card-body about">
        <i className="fa fa-tasks fa-1x fa-ico"> My Skills </i>
        <h3 className="text-header text-wrap">
          <span> My </span>
          <span className="text-success"> Advantages </span>
        </h3>
        <div className="skills">
          <div className="circle">
            <FaPython className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">Python</p>
          <div className="circle">
            <FaLinux className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">Kali Linux</p>
          <div className="circle">
            <FaReact className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">ReactJs</p>
          <div className="circle">
            <FaGit className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">Git</p>
          <div className="circle">
            <FaJs className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">JavaScript</p>
          <div className="circle">
            <FaDatabase className="fadvantage" />
          </div>
          <p className="card-title text-sm-center text-white">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
