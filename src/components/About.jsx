import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {

  return (
    <div>
      <div className="text-start card-body about">
        <i data-aos="fade" className="fa fa-user fa-1x fa-ico text-uppercase">
          {" "}
          About{" "}
        </i>
        <h3 className="text-header text-wrap">
          <span>Every day is a new opportunity to</span>{" "}
          <span className="text-success">learn something new.</span>
        </h3>
        <p data-aos="fade-left" className="text-wrap text-body-primary">
          Since beginning my journey as a programmer and ethical hacker nearly 5
          years ago, I&apos;ve done remote work for agencies, consulted for
          startups, and collaborated with talented people to create digital
          products for both business and consumer use. I&apos;m quietly
          confident, naturally curious, and perpetually working on improving my
          chops one design problem at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
