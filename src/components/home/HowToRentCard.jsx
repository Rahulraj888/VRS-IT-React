import React from "react";
import "../../styles/home.css";

export default function ({src, title}) {
  return (
    <div className="col-lg-3">
      <figure className="elementor-image-box-img mb-3">
        <img
          width="140"
          height="140"
          src={src}
          alt={title}
        />
      </figure>
      <p className="fw-normal">{title}</p>
    </div>
  );
}
