import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="container edu-container text-body-primary">
      <div className="top-section">
        <i
          data-aos="fade-right"
          className="fa fa-university fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          Education
        </i>
      </div>
      <div className="timeline">
        <div className="line"></div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>Bachelor Degree Information Technology</h3>
            <p className="text-body institution">
              University of Cape Coast
            </p>
            <p className="text-body education-date">2020 - Present</p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>High School Diploma</h3>
            <p className="text-body institution">
              Collins Senior High School
            </p>
            <p className="text-body education-date">2016 - 2019</p>

            <p className="text-body education-date">
              <strong>Major:</strong> General Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
