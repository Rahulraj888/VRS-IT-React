import React from "react";
import "../../styles/home.css";

export default function HowToRent() {
  return (
    <div className="container-fluid text-center my-4 py-4">
      <h2 className="text-body-emphasis">How to Rent?</h2>
      <div className="row my-4">
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="140"
              height="140"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/1-Select-product.png"
              alt="Select Product"
            />
          </figure>
          <p className="fw-normal">Select a Product</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="140"
              height="140"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/2-Easy-KYC.png"
              alt="Easy KYC"
            />
          </figure>
          <p className="fw-normal">Easy KYC</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="140"
              height="140"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/3-Pay-once-satisfied.png"
              alt="Pay once satisfied"
            />
          </figure>
          <p className="fw-normal">Pay Once Satisfied</p>
        </div>
        <div className="col-lg-3">
          <figure className="elementor-image-box-img mb-3">
            <img
              width="140"
              height="140"
              src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/4-Product-Delivered.png"
              alt="Product Delivered"
            />
          </figure>
          <p className="fw-normal">Product Delivered</p>
        </div>
      </div>
    </div>
  );
}
