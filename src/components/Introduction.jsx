import "bootstrap/dist/css/bootstrap.min.css";

const Introduction = () => {
  return (
    <div>
      <div className="text-start ">
        <i data-aos="fade-right" className="fa fa-home fa-1x fa-ico text-uppercase"> Introduce</i>
        <h1 className="text-header text-wrap">
          <span className="text-body-primary text-capitalize">
            Say hi from{" "}
          </span>
          <span className="text-success text-capitalize">Young</span>,
          <br />
          <span className="text-body-primary">
            Programmer and Ethical Hacker
          </span>
        </h1>
        <p className="text-wrap text-body-primary">
          I develop and pentest, and I love what I do.
          <br />
          Just simple like that!
        </p>
      </div>
      <div className="text-center card-body">
        <h3 className="text-header experience ">5+</h3>
        <p className="text-wrap text-body-primary">years of experience</p>
      </div>
    </div>
  );
};

export default Introduction;
