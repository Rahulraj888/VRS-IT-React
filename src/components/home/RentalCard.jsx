import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export default function RentalCard( {title, description, link, src}) {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{ title }</h3>
          <p className="card-text my-3">
            { description }
          </p>
          <Link to={link} className="icon-link gap-1">
            View All
          </Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            className="bd-placeholder-img"
            src={src}
            alt="Thumbnail"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
