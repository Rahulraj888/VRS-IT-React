import React from "react";
import "../../styles/home.css";
import HowToRentCard from "./HowToRentCard";

export default function HowToRent() {
  return (
    <div className="container-fluid text-center my-4 py-4">
      <h2 className="text-body-emphasis">How to Rent?</h2>
      <div className="row my-4">
        <HowToRentCard src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/1-Select-product.png" title="Select Product"/>
        <HowToRentCard src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/2-Easy-KYC.png" title="Easy KYC"/>
        <HowToRentCard src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/3-Pay-once-satisfied.png" title="Pay once satisfied"/>
        <HowToRentCard src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/4-Product-Delivered.png" title="Product Delivered"/>
      </div>
    </div>
  );
}
