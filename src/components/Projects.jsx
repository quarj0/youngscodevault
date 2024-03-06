import "bootstrap/dist/css/bootstrap.min.css";
import systemresponse from "../assets/systemresponse.png";
import appscreen from "../assets/interface.png";
import statement from "../assets/statement.png";
import mobiletrans from "../assets/mobiletrans.png";
import verify from "../assets/verify.png";

import almareg from "../assets/almareg.png";
import almatest from "../assets/almatest.png";

import traveljournal from "../assets/tjournal.png";
import travelstart from "../assets/travelstart.png";

import ImageCarousel from "./ImageCarousel";

const Advantages = () => {
  const AtmImages = [appscreen, statement, mobiletrans, verify];
  const AlmaImages = [almareg, almatest];
  const TravelImages = [travelstart, traveljournal];
  return (
    <div className="container-fluid text-body-primary">
      <div className="container text-start card-body">
        <i className="fa fa-building fa-1x fa-ico mt-4 mb-2  text-uppercase">
          {" "}
          portfolio
        </i>
      </div>
      <h3 className="card-title">
        <span className="text-body-primaryy text-start fs-1">Featured</span>
        <span className="text-success m-lg-1 fs-1">Projects</span>
      </h3>
      <section className="text-body-primary">
        <p className="text-body-primary fs-6">
          Dive into a collection of projects that showcase my technical skills
          and creativity. These projects span web development, programming, and
          cybersecurity, providing a glimpse of my problem-solving abilities and
          innovative thinking.
        </p>
      </section>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
        <div className="col" data-aos="fade-right">
          <div className="card h-100">
            <img
              src={systemresponse}
              className="card-img-top"
              alt="system-response-analyser"
            />
            <div className="card-body">
              <h5 className="card-header text-center">
                System Response Analyser
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A script written in python to assess and evaluate the behavior
                and performance of a computer system. Platforms: Linux OS and
                MacOS
                <p className="text-body-primary">Features</p>
                <ul className="text-body-primary">
                  <li className="text-body-primary">
                    Measuring response time for a given url
                  </li>
                  <li className="text-body-primary">
                    Checking if operatiing system is updated and patched
                  </li>
                  <li className="text-body-primary">
                    Checking availability of updates
                  </li>
                  <li className="text-body-primary">
                    Checking disk, memory and CPU usage{" "}
                  </li>
                  <li className="text-body-primary">etc</li>
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
        <div className="col" data-aos="fade-left">
          <div className="card h-100">
            <ImageCarousel images={AlmaImages} />
            <div className="card-body">
              <h5 className="card-header text-center">
                AlmaMingle{" "}
                <small className="m-3 text-danger">[In Progress!]</small>{" "}
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A webapp for university students&apos; to find and make friends
                from different universities in Ghana. <br /> This project uses
                frameworks such as Django and Django Rest Framework for the
                backend and ReactJS for the frontend.
                <br />
                <br />
                This project is built in two parts: the backend and the
                frontend.
              </p>
              <p className="text-body-primary">Features</p>
              <ul className="text-body-primary">
                <li>User authentication and authorization</li>
                <li>User profile management</li>
                <li>User can search for other users by filtering</li>
                <li>Live Chat</li>
                <li>etc</li>
              </ul>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/almaminglef"
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
        <div className="col" data-aos="fade-top">
          <div className="card h-100">
            <ImageCarousel images={AtmImages} />
            <div className="card-body">
              <h5 className="card-header text-center">
                FingerPrint Based ATM Simulator{" "}
              </h5>
              <p className="card-text">
                A simple ATM simulator built with Java programming language.
                It&apos;s a full GUI application that allows users to perform
                basic ATM operations such as fingerprint verification, deposit,
                withdraw, check balance, etc. It uses the fingerprint sensor to
                verify the user&apos;s identity. No database is used in this
                project. All data is logically stored in the application itself
                and can be accessed by the user. Framework used: JavaSwing
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/atm-simulator"
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
        <div className="col" data-aos="fade-down">
          <div className="card h-100">
            <ImageCarousel images={"No Available Img"} />{" "}
            <div className="card-body">
              <h5 className="card-title">Cyber Dashboard</h5>
              <small className="m-3 text-danger">[In Progress!]</small>{" "}
              <p className="card-text">
                A web application that provides a dashboard for cybersecurity
                professionals to monitor and analyze the security of an
                organization&apos;s network. The application is built with
                Django and Django Rest Framework for the backend and ReactJS for
                the frontend. The application uses the Nessus API to fetch
                vulnerability scan data and display it in a user-friendly
                manner.
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/cyber-dashboard/#" onclick="return false;"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Not Available Yet
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
