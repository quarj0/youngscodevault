import "../styles/ContentCard.css";

const ContentCard = ({ title, content }) => {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ContentCard;
