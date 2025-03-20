import React from "react";
import "../../styles/home.css";
import RentalCard from "./RentalCard";

export default function RentalSection() {
  return (
    <div className="container-fluid bg-body-tertiary">
      <div className="row">
        <RentalCard
          title="Rent Laptops"
          description="Laptops which are not only Upgraded, but also affordable."
          link="/dashboard?category=Laptop"
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/MacBook.png"
        />
        <RentalCard
          title="Rent MacBooks"
          description=" Enliven a Spirit of that Sleeky Aesthetic of the most Technical
          MacBooks."
          link="/dashboard?category=MacBook"
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/MacBook.png"
        />
      </div>
    </div>
  );
}
