import React from "react";
import "../styles/FixedCard.css"; // Create this CSS file for styling

const FixedCard = () => {
  return (
    <div className="fixed-card">
      <h2>Your Name</h2>
      <h4>Your Area of Focus</h4>
      <img src="path/to/your/image.jpg" alt="Your Name" />
      <p>Your Location</p>
      <div className="social-icons">
        {/* Add your social media icons here */}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Social Media 1
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Social Media 2
        </a>
        {/* Add more social media icons as needed */}
      </div>
      <a href="mailto:your@email.com" className="btn btn-primary">
        Email Me
      </a>
    </div>
  );
};

export default FixedCard;
