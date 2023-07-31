
import Carousel from 'react-bootstrap/Carousel';

const CertificationCarousel = () => {
  return (
    <div className="text-center">
      <div className="card-body">
        <i data-aos="fade" className="fa fa-certificate fa-1x fa-ico mb-3 text-uppercase">
          {" "}
          Certifications
        </i>
      </div>
      <Carousel className="d-inline-block w-50">
        <Carousel.Item>
          <img
            src="src/assets/images/CCFSA.png"
            className="d-block w-100"
            alt="cert-img"
          />
          <Carousel.Caption>
            <h3 className="text-body-secondary fs-4 fw-semibold">
              <a
                className="text-decoration-none"
                href="https://www.coursera.org/verify/QP8P7YUJD7HH"
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/CRPOSS.png"
            className="d-block w-100"
            alt="cert-img"
          />
          <Carousel.Caption>
            <h3 className="text-body-secondary fs-4 fw-semibold">
              <a
                className="text-decoration-none"
                href="https://www.coursera.org/verify/XHYDSERR686T"
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/ICTCA.png"
            className="d-block w-100"
            alt="cert-img"
          />
          <Carousel.Caption>
            <h3 className="text-body-secondary fs-4 fw-semibold">
              <a
                className="text-decoration-none"
                href="https://www.coursera.org/verify/9WR85FNZ6GHM"
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/NSDV.png"
            className="d-block w-100"
            alt="cert-img"
          />
          <Carousel.Caption>
            <h3 className="text-body-secondary fs-4 fw-semibold">
              <a
                className="text-decoration-none"
                href="https://www.coursera.org/verify/QQNSZJF4ZPCB"
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/DME.png"
            className="d-block w-100"
            alt="cert-img"
          />
          <Carousel.Caption>
            <h3 className="text-body-secondary fs-4 fw-semibold">
              <a
                className="text-decoration-none"
                href="https://www.coursera.org/verify/UXT8LBK2MK34"
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CertificationCarousel;
