import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CertificationCarousel = () => {
  return (
    <div className="text-body-primary container">
      <div className="card-body">
        <i
          data-aos="fade-right"
          className="fa fa-certificate fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          Qualifications
        </i>
      </div>
      <div className="card-header">
        <h3 className="text-header text-capitalize m-1">
          awards & <span className="text-success">achievements</span>
        </h3>
      </div>
      <div className="card-text text-center bg-transparent">
        <lazyload>
          <Carousel className="d-inline-block w-50">
            <Carousel.Item>
              <img
                src={`https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QP8P7YUJD7HH/CERTIFICATE_LANDING_PAGE~QP8P7YUJD7HH.jpeg`}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XHYDSERR686T/CERTIFICATE_LANDING_PAGE~XHYDSERR686T.jpeg`}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9WR85FNZ6GHM/CERTIFICATE_LANDING_PAGE~9WR85FNZ6GHM.jpeg`}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QQNSZJF4ZPCB/CERTIFICATE_LANDING_PAGE~QQNSZJF4ZPCB.jpeg`}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UXT8LBK2MK34/CERTIFICATE_LANDING_PAGE~UXT8LBK2MK34.jpeg`}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
          </Carousel>
        </lazyload>
      </div>
    </div>
  );
};

export default CertificationCarousel;
