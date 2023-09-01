import "bootstrap/dist/css/bootstrap.min.css";


const Education = () => {


  return (
    <div className=" container">
      <div className="text-start card-body">
        <i data-aos="fade-right" className="fa fa-university fa-1x fa-ico text-uppercase">
          {" "}
          Education{" "}
        </i>
        <p data-aos="fade" className="text-wrap">
          <small className="text-body-primary"> 2020 - present </small>
        </p>
        <h5 data-aos="fade-right" className="text-header text-wrap">
          Bachelor Degree of Information Technology
        </h5>
        <small data-aos="fade-left" className="text-body-primary">
          University of Cape Coast{" "}
        </small>
      </div>
    </div>
  );
};

export default Education;
