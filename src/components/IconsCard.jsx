import "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaAddressBook,
  FaAddressCard,
  FaAngular,
  FaArchive,
  FaAward,
  FaHome,
  FaPersonBooth,
} from "react-icons/fa";
import "../styles/IconsCard.css"; // Create this CSS file for styling

const IconsCard = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card slim-card margin">
            <FaHome />
            <FaPersonBooth />
            <FaAddressBook />
            <FaAngular />
            <FaAddressCard />
            <FaArchive />
            <FaAward />
            <FaAddressCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsCard;
