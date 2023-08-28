import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Project.css";

const Advantages = () => {
  return (
    <div className="container-fluid">
      <div className="container text-start card-body">
        <i className="fa fa-building fa-1x fa-ico mt-4 mb-2  text-uppercase">
          {" "}
          portfolio
        </i>
      </div>
      <h3 className="card-title">
        <span className="text-body text-start fs-1">Featured</span>
        <span className="text-success m-lg-1 fs-1">Projects</span>
      </h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
        <div className="col">
          <div className="card h-100">
            <img
              src="src/assets/systemresponse.png"
              className="card-img-top"
              alt="system-response-analyser"
            />
            <div className="card-body">
              <h5 className="card-header text-center">System Response Analyser</h5>
              <p className="card-text mt-3">
                A script written in python for
                <ul>
                  <li>Measuring response time for a given url</li>
                  <li>Checking if operatiing system is updated and patched</li>
                  <li>Checking availability of updates</li>
                  <li>Checking disk, memory and CPU usage </li>
                </ul>
              </p>
              <p className="link-to-project text-sm-center ">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/System-Response-Analyzer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">UniMatch</h5>
              <p className="card-text">In progress!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Template Market</h5>
              <p className="card-text">In progress!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Weather App (Demo)</h5>
              <p className="card-text">Demo will be updated soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
