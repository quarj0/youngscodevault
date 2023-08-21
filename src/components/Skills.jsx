import "../styles/Skills.css";
import {
  FaPython,
  FaLinux,
  FaReact,
  FaGit,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

const MySkills = () => {
  return (
    <div>
      <div className="text-start card-body about">
        <i className="fa fa-tasks fa-1x fa-ico mt-4 mb-2 text-uppercase">
          {" "}
          My Skills{" "}
        </i>
        <h3 className="text-header text-wrap">
          <span> My </span>
          <span className="text-success"> Advantages </span>
        </h3>
        <div className="skills-container">
          <div className="skills">
            <div className="circle">
              <FaPython className="fadvantage" />
              <span className="percentage">80%</span>
            </div>
          </div>
          <p className="card-body align-bottom">Python</p>

          <div className="skills">
            <div className="circle">
              <FaLinux className="fadvantage" />
              <span className="percentage">80%</span>
            </div>
          </div>
          <p className="">Kali Linux</p>

          <div className="skills">
            <div className="circle">
              <FaReact className="fadvantage" />
              <span className="percentage">78%</span>
            </div>
          </div>
          <p className="">ReactJs</p>

          <div className="skills">
            <div className="circle">
              <FaGit className="fadvantage" />
              <span className="percentage">65%</span>
            </div>
          </div>
          <p className="">Git</p>

          <div className="skills">
            <div className="circle">
              <FaJs className="fadvantage" />
              <span className="percentage">85%</span>
            </div>
          </div>
          <p className="">JavaScript</p>

          <div className="skills">
            <div className="circle">
              <FaDatabase className="fadvantage" />
              <span className="percentage">60%</span>
            </div>
          </div>
        <p className="">JavaScript</p>

        </div>
      </div>
    </div>
  );
};

export default MySkills;
