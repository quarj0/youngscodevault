import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import {
  FaPython,
  FaLinux,
  FaReact,
  FaGit,
  FaJs,
  FaDatabase,
} from "react-icons/fa/";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="text-center card-body about">
        <i className="fa fa-tasks fa-1x fa-ico"> My Skills </i>
        <h3 className="text-header text-wrap">
          <span> My </span>
          <span className="text-success"> Advantages </span>
        </h3>
        <div className="skills">
          <FaPython className="fadvantage " />
          <p className="card-title text-sm-center text-white">Python</p>
          <FaLinux className="fadvantage " />
          <p className="card-title text-sm-center text-white">Kali Linux</p>
          <FaReact className="fadvantage " />
          <p className="card-title text-sm-center text-white">ReactJs</p>
          <FaGit className="fadvantage " />
          <p className="card-title text-sm-center text-white">Git</p>
          <FaJs className="fadvantage " />
          <p className="card-title text-sm-center text-white">JavaScript</p>
          <FaDatabase className="fadvantage " />
          <p className="card-title text-sm-center text-white">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
