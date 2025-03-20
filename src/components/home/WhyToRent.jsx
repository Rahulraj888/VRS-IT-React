import React from "react";
import "../../styles/home.css";

export default function WhyToRent() {
  return (
    <div className="container-fluid text-center my-4 py-4 bg-body-tertiary border-top border-bottom">
      <h2 className="text-body-emphasis">Why to Rent Out?</h2>
      <div className="row my-4">
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="70"
              height="70"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Best-Competitive-Price.png"
              alt="Best Competitive Price"
            />
          </figure>
          <p className="fw-normal">Best Competitive Price</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="70"
              height="70"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Flexible-Update.png"
              alt="Flexible Update"
            />
          </figure>
          <p className="fw-normal">Flexible Update</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="70"
              height="70"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Quality-Services.png"
              alt="Quality Services"
            />
          </figure>
          <p className="fw-normal">Quality Services</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="70"
              height="70"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/On-Time-Availability.png"
              alt="On-Time Availability"
            />
          </figure>
          <p className="fw-normal">On-Time Availability</p>
        </div>
      </div>
    </div>
  );
}
