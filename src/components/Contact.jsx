import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Contact.css";
import "react-icons/fa";

const Contact = () => {
  return (
    <div className="container-fluid text-start">
      <i className="fa fa-contact-card fa-1x fa-ico mt-4 mb-2 text-uppercase text-sm-center">
        {" "}
        Contact Me{" "}
      </i>
      <div className="row g-3 m-2">
        <p className="text-body-primary fs-1">
         <span>Let&apos;s Work</span> <span className="text-success">Together!</span>
        </p>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="full name"
            aria-label="full name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="phone number (optional)"
            aria-label="phone number"
          />
        </div>
        <div className="col">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
          />
        </div>
        <div className="row g-3">
          <textarea
            className="form-control m-3"
            placeholder="message"
            aria-label="message"
            aria-colspan={3}
            rows={3}
            autoComplete="on"
            autoCorrect="on"
            autoFocus={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
