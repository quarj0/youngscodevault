import "../styles/ContentCard.css";
import "react-icons/fa/";

const ContentCard = () => {
  return (
    <div className="container-fluid">
      <div className="text-center card-body">
        <i className="fa fa-home fa-1x"> Introduction </i>
        <h1 className="text-header text-wrap">
          <span className="text-black">Say hello from </span> <span className="text-success">Young, </span>{" "}
          <span className="text-black">programmer and ethical hacker</span>
        </h1>
        <p className="text-wrap text-body-secondary">
          I develop website, program with python with main focus on cyber
          security.
        </p>
      </div>
      <div className="text-center card-body">
        <h3 className="text-header text-wrap experience">5+</h3>
        <p className="text-wrap text-body-secondary">years of experience</p>
      </div>
      <div className="text-center card-body about">
        <i className="fa fa-user fa-1x"> About </i>
        <h3 className="text-header text-wrap">
          Every day is a new opportunity to learn something new.
        </h3>
        <p className="text-wrap text-body-secondary">
          Since beginning my journey as a programmer and ethical hacker nearly 5
          years ago, I&apos;ve done remote work for agencies, consulted for
          startups, and collaborated with talented people to create digital
          products for both business and consumer use. I&apos;m quietly
          confident, naturally curious, and perpetually working on improving my
          chops one design problem at a time.
        </p>
      </div>
      <div className="text-center card-body">
        <i className="fa fa-university fa-1x"> Education </i>
        <p className="text-wrap">
          <small className="text-body-secondary"> 2020 - present </small>
        </p>
        <h5 className="text-header text-wrap">
          Bachelor Degree of Information Technology
        </h5>
        <small className="text-body-secondary">University of Cape Coast </small>
      </div>
      <div className="card-title">My Specialization</div>
      <div className="card">
        <h5 className="card-title">Web Development</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
