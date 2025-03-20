import React from "react";
import "../../styles/aboutus.css";

export default function MissionCard( {title, description}) {
  return (
    <div className="column-2">
      <div className="card">
        <div className="img-container">
          <img src="/images/about-us/shakehand.jpeg" alt="Broader Array" />
        </div>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
