import "bootstrap/dist/css/bootstrap.min.css";
import { FaPython, FaJs, FaLinux, FaReact, FaShieldAlt } from "react-icons/fa";

const Advantages = () => {
  return (
    <div>
      <div className="text-center card-body">
        <i data-aos="fade-down" className="fa fa-tasks fa-1x fa-ico">
            {" "}
            SKills
        </i>
        <p className="text-body" data-aos="fade-up">
        <FaJs />
        <FaPython />
        <FaLinux />
        <FaReact />
        <FaShieldAlt />
        </p>

      </div>
    </div>
  );
};
export default Advantages;
