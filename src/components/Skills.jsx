import "../styles/Skills.css";
import { FaPython, FaLinux, FaReact, FaGit, FaJs, FaDatabase } from 'react-icons/fa';

const MySkills = () => {
  return (
    <div>
      <div className="text-start card-body about">
        <i className="fa fa-tasks fa-1x fa-ico mt-4 mb-2 text-uppercase"> My Skills </i>
        <h3 className="text-header text-wrap">
          <span> My </span>
          <span className="text-success"> Advantages </span>
        </h3>
        <div className="skills">
          <div className="circle">
            <FaPython className="fadvantage" />
            <span className="percentage">80%</span>
          </div>
          <p className="card-body align-bottom">Python</p>
          <div className="circle">
            <FaLinux className="fadvantage" />
            <span className="percentage">70%</span>
          </div>
          {/* <p className="card-title text-sm-center text-white">Kali Linux</p> */}
          <div className="circle">
            <FaReact className="fadvantage" />
            <span className="percentage">90%</span>
          </div>
          {/* <p className="card-title text-sm-center text-white">ReactJs</p> */}
          <div className="circle">
            <FaGit className="fadvantage" />
            <span className="percentage">75%</span>
          </div>
          {/* <p className="card-title text-sm-center text-white">Git</p> */}
          <div className="circle">
            <FaJs className="fadvantage" />
            <span className="percentage">85%</span>
          </div>
          {/* <p className="card-title text-sm-center text-white">JavaScript</p> */}
          <div className="circle">
            <FaDatabase className="fadvantage" />
            <span className="percentage">70%</span>
          </div>
          {/* <p className="card-title text-sm-center text-white">SQL</p> */}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
