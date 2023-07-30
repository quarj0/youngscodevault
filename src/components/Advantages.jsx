import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";

import { FaPython } from "react-icons/fa";

const Advantages = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <div className="text-center card-body">
                <i data-aos="fade" className="fa fa-tasks fa-1x fa-ico">
                    {" "}
                    Advantages{" "}
                </i>
                <p data-aos="fade-right" className="text-wrap">
                    <small className="text-body-primary"> 2020 - present </small>
                </p>
                <h5 data-aos="fade-right" className="text-header text-wrap">
                    <FaPython /> Python
                </h5>
                <small data-aos="fade-right" className="text-body-primary">
                    <FaPython /> Python is a programming language that lets you work quickly and integrate systems more effectively.
                </small>
            </div>
        </div>
    );

};
export default Advantages;