import React from "react";
import "../../styles/home.css";
import WhyToRentCard from "./WhyToRentCard";

export default function WhyToRent() {
  return (
    <div className="container-fluid text-center my-4 py-4 bg-body-tertiary border-top border-bottom">
      <h2 className="text-body-emphasis">Why to Rent Out?</h2>
      <div className="row my-4">
        <WhyToRentCard
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Best-Competitive-Price.png"
          title="Best Competitive Price"
        />
        <WhyToRentCard
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Flexible-Update.png"
          title="Flexible Update"
        />
        <WhyToRentCard
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Quality-Services.png"
          title="Quality Services"
        />
        <WhyToRentCard
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/On-Time-Availability.png"
          title="On-Time Availability"
        />
      </div>
    </div>
  );
}
