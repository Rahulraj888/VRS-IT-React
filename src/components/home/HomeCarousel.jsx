import React from "react";
import "../../styles/home.css";
import CarouselItem from "./CarouselItem";

function HomeCarousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <CarouselItem
          className="carousel-item active"
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Laptop-Banner1920by600.png"
          title="Laptops"
          description="Affordable, Upgraded and Updated .. Laptop Rentals on your Finger Tips"
        />
        <CarouselItem
          className="carousel-item"
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Macbook-Banner1920by600.png"
          title="Macbook"
          description="Exploring a Diversified Technology in umpteen Variants of MacBook Rentals"
        />
        <CarouselItem
          className="carousel-item"
          src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/iPadBanner1920by600.jpg"
          title="IPAD"
          description="Upbringing and Fostering the Apex of Technology with renting iPads"
        />
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
