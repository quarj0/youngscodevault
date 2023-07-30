import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Certificates = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="src/assets/images/CCFSA.png"
            className="d-block w-100"
            alt="cert-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/CRPOSS.png"
            className="d-block w-100"
            alt="cert-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/ICTCA.png"
            className="d-block w-100"
            alt="cert-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/NSDV.png"
            className="d-block w-100"
            alt="cert-img"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Certificates;
