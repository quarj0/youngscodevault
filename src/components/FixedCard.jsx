import "../styles/FixedCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FixedCard = () => {
  const handleMailTo = () => {
    const email = "owusuansahkwadwo24@gmail.com";
    const subject = "Contact from your portfolio";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailto;
  };
    
  return (
    <div className="card container-fluid text-bg-dark p-3 fixed-card">
      <h2 className="text-title registered fw-bold fs-2 text-start text-capitalize">
        kwadwo <span className="custom-shorthand-k">

        </span>
      </h2>
      <div className="text-body">
        <div className="text-body-secondary text-end">
          <small className="text-sm-center text-break fs-6">
            Ethical Hacker
          </small>
        </div>
        <div className="text-body-secondary text-end">
          <small className="text-sm-center text-break fs-6">
            & Programmer
          </small>
        </div>

      </div>
      <img src="src/assets/mypic.jpg" alt="mypic" className="mypic" />
      <p className="text-body-secondary mt-4">Location: EJisu-Onwe, Kumasi</p>
      <div className="social-icons">
        <div className="icons-container icon-link">
          <a
            className="icon-link icon-link"
            href="https://github.com/hacks-and-codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link">
          <a
            className="icon-link icon-link"
            href="https://linkedin.com/in/quarjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link">
          <a
            className="icon-link icon-link-"
            href="https://twitter.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-">
          <a
            className="icon-link icon-link"
            href="https://www.instagram.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="card-text">
        <p className="text-body-secondary">
          <small className="text-sm-center text-capitalize">
            &copy; 2023 kwadwo. All Rights Reserved
          </small>
        </p>
      </div>
        <button className="btn btn-outline-success btn-sm" onClick={handleMailTo}>Send mail</button>

    </div>
  );
};

export default FixedCard;
