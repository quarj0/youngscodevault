import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Specialization.css";

const Specialization = () => {
  return (
    <div className="special-container">
      <div className="card-title text-center mt-4">
        <i className="fa fa-users-cog fa-1x fa-ico"> Services </i>
        <h2 className="card-title">
          <span>My </span> <span className="text-success">Specialization</span>
        </h2>
      </div>
      <div data-aos="fade-down" className="card card-special-container">
        <h5 className="card-title text-center mb-4 mt-3">Development</h5>
        <div className="card-body text-center">
          <small className="card-title text-body-primary">
            I build website with ReactJs and Django
          </small>
          <p className="card-text mt-5 fs-6 text-body-primary text-start">
            <small className="text-body-primary">2 projects</small>
          </p>
        </div>
      </div>
      <div data-aos="fade-down" className="card  card-special-container">
        <h5 className="card-title text-center mb-4 mt-3 ">Programming</h5>
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
        className="card mb-4 mt-3 card-special-container"
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
