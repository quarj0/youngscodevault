import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Certifications = () => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white text-uppercase">
        <i className="fa fa-certificate fa-1x fa-ico mb-3 text-uppercase">
          {" "}
          Qualifications
        </i>
      </div>
      <div className="card-header">
        <h3 className="text-header text-capitalize m-1">
          awards & <span className="text-success">achievements</span>
        </h3>
      </div>
      <div className="card-body">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "4px solid  rgb(33, 150, 243)" }}
            date="2023 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Systems Security Certified Practitioner
            </h3>
            <h4 className="vertical-timeline-element-subtitle ">(ISC)²</h4>
            <p>
              This certification demonstrates the ability to implement, monitor
              and administer IT infrastructure in accordance with information
              security policies and procedures that ensure data confidentiality,
              integrity and availability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "4px solid  rgb(33, 150, 243)" }}
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              IBM Cybersecurity Analyst Professional Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cousera & IBM Security Learning Academy
            </h4>
            <p>
              This certification demonstrates the ability to understand cyber
              security concepts, identify different types of threats, and
              implement security controls to protect an organization&apos;s
              assets.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "4px solid  rgb(33, 150, 243)" }}
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Certified JavaScript Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">W3Schools</h4>
            <p>
              This certification demonstrates the ability to write efficient and
              maintainable JavaScript code.
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Certifications;
