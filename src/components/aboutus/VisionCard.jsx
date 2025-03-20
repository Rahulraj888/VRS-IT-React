import React from "react";
import "../../styles/aboutus.css";

export default function VisionCard({ src, title }) {
  return (
    <div className="column">
      <div className="card">
        <div className="icon-container">
          <img src={src} alt={title} />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
