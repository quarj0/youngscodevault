import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <div className="container about">
        <div className="row">
          <div className="cols-md-2">
            <i
              data-aos="fade-right"
              className="fa fa-user fa-1x fa-ico text-uppercase"
            >
              {" "}
              About{" "}
            </i>
          </div>
          <div className="cols-md-10">
            <h3 className="text-header">
              <span>Every day is a new opportunity to</span>{" "}
              <span className="text-success">learn something new</span>.
            </h3>
            <p data-aos="fade-left" className="text-wrap text-body-primary">
              Since beginning my journey as a web developer and ethical hacker
              nearly 5 years ago, probably more than that because didn&apos;t
              know much then. I&apos;ve done remote work for agencies, consulted for
              startups, and collaborated with talented people to create digital
              products for both business and consumer use. I&apos;m quietly
              confident, naturally curious, and perpetually working on improving
              my chops one design problem at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
