import Carousel from "react-bootstrap/Carousel";

const CertificationCarousel = () => {
  return (
    <div className="text-primary container">
      <div className="card-body">
        <i
          data-aos="fade-right"
          className="fa fa-certificate fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          Certifications
        </i>
      </div>
      <p className="text-body-primary fs-6">
        Courses and Certifications I have completed to improve my skills and
        knowledge.
      </p>
      <div className="card-text text-center">
        <Carousel className="d-inline-block w-50">
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
          <Carousel.Item>
            <img
              src="src/assets/images/DME.png"
              className="d-block w-100"
              alt="cert-img"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CertificationCarousel;
