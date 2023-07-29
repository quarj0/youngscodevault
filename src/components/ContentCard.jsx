import { useEffect } from "react";
import "react-icons/fa/";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/ContentCard.css";
import {
  FaPython,
  FaLinux,
  FaReact,
  FaGit,
  FaJs,
  FaDatabase,
} from "react-icons/fa/";

const ContentCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="container-fluid">
      <lazy>
        <div className="text-center card-body">
          <i className="fa fa-home fa-1x">Introduction</i>
          <h1 className="text-header text-wrap">
            <span className="text">Say hello from </span>
            <span className="text-success">Young, </span>
            <span className="text">programmer and ethical hacker</span>
          </h1>
          <p className="text-wrap text-body-secondary">
            I develop website, program with python with main focus on cyber
            security.
          </p>
        </div>
        <div className="text-center card-body">
          <h3 className="text-header experience ">5+</h3>
          <p className="text-wrap text-body-secondary">years of experience</p>
        </div>
        <div className="text-center card-body about">
          <i data-aos="fade" className="fa fa-user fa-1x">
            {" "}
            About{" "}
          </i>
          <h3 className="text-header text-wrap">
            <span>Every day is a new opportunity to</span>{" "}
            <span className="text-success">learn something new.</span>
          </h3>
          <p data-aos="fade-left" className="text-wrap text-body-secondary">
            Since beginning my journey as a programmer and ethical hacker nearly
            5 years ago, I&apos;ve done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I&apos;m quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time.
          </p>
        </div>
        <div className="text-center card-body">
          <i data-aos="fade" className="fa fa-university fa-1x">
            {" "}
            Education{" "}
          </i>
          <p data-aos="fade-right" className="text-wrap">
            <small className="text-body-secondary"> 2020 - present </small>
          </p>
          <h5 data-aos="fade-right" className="text-header text-wrap">
            Bachelor Degree of Information Technology
          </h5>
          <small data-aos="fade-right" className="text-body-secondary">
            University of Cape Coast{" "}
          </small>
        </div>

        <div className="card-title text-center mt-4">
          <h2 className="card-title m-3">
            <span>My </span>{" "}
            <span className="text-success">Specialization</span>
          </h2>
        </div>
        <div
          data-aos="fade-down"
          className="card w-50 h-30 card-special-container"
        >
          <h5 className="card-title text-center mt-4">Development</h5>
          <div className="card-body text-center">
            <small className="card-title text-body-secondary">
              I build website with ReactJs and Django
            </small>
            <p className="card-text mt-5 fs-6 text-body-secondary text-start">
              <small className="text-body-secondary">2 projects</small>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="card w-50 h-30 card-special-container"
        >
          <h5 className="card-title text-center mt-4">Programming</h5>
          <div className="card-body text-center">
            <small className="card-title text-body-secondary">
              I build scripts, and automate tasks with Python
            </small>
            <p className="card-text mt-5 fs-6 text-body-secondary text-start">
              <small className="text-body-secondary">4 projects</small>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="card w-50 h-30 card-special-container"
        >
          <h5 className="card-title text-center mt-4">Pentesting</h5>
          <div className="card-body text-center">
            <small className="card-title text-body-secondary">
              I take projects on bounty hunting and help other developers to
              secure their web apps
            </small>
          </div>
        </div>
        <div className="text-center card-body about">
          <i className="fa fa-tasks fa-1x"> My Skills </i>
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
      </lazy>
    </div>
  );
};

export default ContentCard;
