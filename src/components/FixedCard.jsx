import React from "react";
import "../styles/FixedCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa/";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FixedCard = () => {
  return (
    <div className="fixed-card container-fluid card">
      <h2>Kwadwo</h2>
      <h4 className="card-text mt-1">Ethical Hacker & Web Developer</h4>
      <img src="../assets/mypic.jpeg" alt="mypic" />
      <p>Your Location</p>
      <div className="social-icons">
        <a
          className="icon-link icon-link-hover"
          href="https://github.com/hacks-and-codes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="icon-link icon-link-hover"
          href="https://linkedin.com/in/quarjo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="icon-link icon-link-hover"
          href="https://twitter.com/quarjowusu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="icon-link icon-link-hover"
          href="https://www.instagram.com/quarjowusu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <a href="mailto:your@email.com" className="btn btn-success">
        Email Me
      </a>
    </div>
  );
};

export default FixedCard;
