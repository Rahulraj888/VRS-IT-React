import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export default function CarouselItem({ src, title, description, className }) {
    return (
      <div className={className}>
        <img src={src} className="d-block w-100" alt={title} />
        <div className="carousel-caption d-none d-md-block text-start">
          <div className="d-flex flex-column align-items-start justify-content-center h-100 carousel-custom">
            <h1 className="display-3 fw-bold my-2">
              {title}
              <br />
              Rentals
            </h1>
            <p className="my-2">{description}</p>
            <Link to="/dashboard" className="btn btn-primary btn-lg my-2">
              RENT NOW
            </Link>
          </div>
        </div>
      </div>
    );
  }
  