import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="text-center card-body">
        <i data-aos="fade" className="fa fa-university fa-1x fa-ico">
          {" "}
          Education{" "}
        </i>
        <p data-aos="fade-right" className="text-wrap">
          <small className="text-body-primary"> 2020 - present </small>
        </p>
        <h5 data-aos="fade-right" className="text-header text-wrap">
          Bachelor Degree of Information Technology
        </h5>
        <small data-aos="fade-right" className="text-body-primary">
          University of Cape Coast{" "}
        </small>
      </div>
    </div>
  );
};

export default Education;
