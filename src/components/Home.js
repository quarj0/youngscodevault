import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const updateLastUpdated = () => {
      setLastUpdated(new Date());
    };

    const interval = setInterval(updateLastUpdated, 60000);

    return (
      () => {
        clearInterval(interval);
      },
      []
    );
  });

  return (
    <div className="card-group">
      <div className="card ">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated {formatLastUpdated(lastUpdated)}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

const formatLastUpdated = (date) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / 60000);

  if (diffInMinutes < 1) {
    return "Just now";
  } else if (diffInMinutes === 1) {
    return "1 minute ago";
  } else {
    return `${diffInMinutes} minutes ago`;
  }
};

export default Home;
