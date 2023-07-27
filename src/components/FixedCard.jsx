import "../styles/FixedCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa/";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FixedCard = () => {
  return (
    <div className="card container-fluid text-bg-dark p-3">
      <h2 className="card-title registered">Kwadwo &reg;</h2>
      <div className="card-body text-wrap">
        <span className="text-body-secondary text-end text-break fs-6">
          Ethical Hacker & Web Developer
        </span>
      </div>
      <img src="src/assets/mypic.jpeg" alt="mypic" className="card-img-top" />
      <p className="text-body-secondary">Kumasi</p>
      <div className="social-icons">
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://github.com/hacks-and-codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://linkedin.com/in/quarjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://twitter.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://www.instagram.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="text-body">
        <p className="text-body-secondary">
          <small className="text-sm-center">&copy; my porfolio 2023 All Rights Reserved.</small>
        </p>
      </div>
      <button className="btn btn-success mt-3">Email me</button>
    </div>
  );
};

export default FixedCard;
