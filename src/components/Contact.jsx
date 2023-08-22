import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  const handleMailTo = () => {
    const email = "owusuansahkwadwo24@gmail.com";
    const subject = "Contact from your portfolio";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailto;
  };

  return (
    <div className="container-fluid text-start">
      <i className="fa fa-contact-card fa-1x fa-ico mt-4 mb-2 text-uppercase text-sm-center">
        {" "}
        Contact Me{" "}
      </i>
      <form>
        <div className="row g-3 m-2">
          <p className="text-body-primary fs-1">
            <span>Let&apos;s Work</span>{" "}
            <span className="text-success">Together!</span>
          </p>

          <div className="contact message">
            <p className="text-body-secondary fs-6">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="col text-center ">
           <button className="btn btn-success text-center w-25 text-uppercase" type="submit" onClick={handleMailTo}>
             send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
