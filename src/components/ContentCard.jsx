import { useEffect } from "react";
import "react-icons/fa/";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/ContentCard.css";

const ContentCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="row ">
      <div className="col-4">
        <div
          id="simple-list-example"
          className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
        >
          <i className="fa fa-home simple-list-item-1"></i>
          <i className="fa fa-user simple-list-item-2"></i>
          <i className="fa fa-university simple-list-item-3"></i>
          <i className="fa fa-tasks simple-list-item-4"></i>
          <i className="fa fa-certificate simple-list-item-5"></i>
        </div>
      </div>
      <div className="col-8 main-content">
        <div
          data-bs-spy="scroll"
          data-bs-target="#simple-list-example"
          data-bs-offset="0"
          data-bs-smooth-scroll="true"
          className="scrollspy-example"
          tabIndex="0"
        ></div>
      </div>
    </div>
  );
};

export default ContentCard;
