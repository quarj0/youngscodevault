import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Specialization.css";

const Specialization = () => {
  return (
    <div className="special-container container-fluid">
      <div className="card-title text-start mt-4">
        <i data-aos="fade-right" className="fa fa-users-cog fa-1x fa-ico text-uppercase"> Services </i>
        <h2 className="card-title ">
          <span className="fs-1">My </span> <span className="text-success fs-1">Specialization</span>
        </h2>
      </div>
      <div data-aos="fade-down" className="card card-special-container">
        <h5 className="card-body text-start mt-3 m-lg-2">Development</h5>
        <div className="card-body text-start">
          <small className="card-body text-body-primary">
            I build website with ReactJs and Django
          </small>

        </div>
      </div>
      <div data-aos="fade-down" className="card  card-special-container">
        <h5 className="card-body text-start mt-3 m-lg-2">Programming</h5>
        <div className="card-body text-start">
          <small className="card-title text-body-primary card-body">
            I build scripts, and automate tasks with Python
          </small>

        </div>
      </div>
      <div
        data-aos="fade-down"
        className="card mb-4 mt-3 card-special-container"
      >
        <h5 className="card-body text-start mt-3 m-lg-2">Pentesting</h5>
        <div className="card-body text-start">
          <small className="card-body text-body-primary">
            I take projects on bounty hunting and help other developers to
            secure their web apps
          </small>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
