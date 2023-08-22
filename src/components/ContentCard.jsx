import "bootstrap/dist/css/bootstrap.min.css";
import Introduction from "./Introduction.jsx";
import About from "./About.jsx";
import Certificate from "./Certificates.jsx";
import Education from "./Education.jsx";
import Specialization from "./Specialization.jsx";
import Skills from "./Skills.jsx";
import FixedCard from "./FixedCard";
import Projects from "./Projects.jsx";

import "../styles/ContentCard.css";
import Contact from "./Contact.jsx";

const ContentCard = () => {
  return (
    <div className="row content-container container-fluid bg-img">
      <div className="col-lg-4 col-md-12 fixed-card-container">
        <FixedCard />
      </div>
      <div className="col-lg-8 col-md-12 scrollable-contents">
        <Introduction />
        <About />
        <Education />
        <Specialization />
        <Certificate />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default ContentCard;
