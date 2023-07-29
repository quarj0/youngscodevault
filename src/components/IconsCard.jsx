import "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/IconsCard.css"; // Create this CSS file for styling

const IconsCard = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="slim-card margin">
           <i className="fa fa-home fa-2x  fa-icon"></i>
           <i className="fa fa-user fa-2x fa-icon"></i>
           <i className="fa fa-university fa-2x fa-icon"></i>
           <i className="fa fa-tasks fa-2x fa-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsCard;
