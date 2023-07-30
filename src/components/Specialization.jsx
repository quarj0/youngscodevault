import { useEffect } from "react";
import Aos from "aos";
import "bootstrap/dist/css/bootstrap.min.css";

const Specialization = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="card-title text-center mt-4">
        <h2 className="card-title m-3">
          <span>My </span> <span className="text-success">Specialization</span>
        </h2>
      </div>
      <div
        data-aos="fade-down"
        className="card w-50 h-30 card-special-container"
      >
        <h5 className="card-title text-center mt-4">Development</h5>
        <div className="card-body text-center">
          <small className="card-title text-body-primary">
            I build website with ReactJs and Django
          </small>
          <p className="card-text mt-5 fs-6 text-body-primary text-start">
            <small className="text-body-primary">2 projects</small>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="card w-50 h-30 card-special-container"
      >
        <h5 className="card-title text-center mt-4">Programming</h5>
        <div className="card-body text-center">
          <small className="card-title text-body-primary">
            I build scripts, and automate tasks with Python
          </small>
          <p className="card-text mt-5 fs-6 text-body-primary text-start">
            <small className="text-body-primary">4 projects</small>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="card w-50 h-30 card-special-container"
      >
        <h5 className="card-title text-center mt-4">Pentesting</h5>
        <div className="card-body text-center">
          <small className="card-title text-body-primary">
            I take projects on bounty hunting and help other developers to
            secure their web apps
          </small>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
