import React from "react";
import "../../styles/home.css";

export default function WhyToRentCard({ src, title }) {
  return (
    <div className="col-lg-3">
      <figure className="elementor-image-box-img mb-3">
        <img width="70" height="70" src={src} alt={title} />
      </figure>
      <p className="fw-normal">{title}</p>
    </div>
  );
}
