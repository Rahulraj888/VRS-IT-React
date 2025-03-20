import React from "react";
import "../../styles/home.css";

function HomeCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Laptop-Banner1920by600.png"
            className="d-block w-100"
            alt="Laptop Rentals"
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="d-flex flex-column align-items-start justify-content-center h-100 carousel-custom">
              <h1 className="display-3 fw-bold my-2">
                Laptops
                <br />
                Rentals
              </h1>
              <p className="my-2">
                Affordable, Upgraded and Updated .. Laptop Rentals on your
                Finger Tips
              </p>
              <a
                href="/html/dashboard.html"
                className="btn btn-primary btn-lg b my-2"
              >
                RENT NOW
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/Macbook-Banner1920by600.png"
            className="d-block w-100"
            alt="Macbook Rentals"
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="d-flex flex-column align-items-start justify-content-center h-100 carousel-custom">
              <h1 className="display-3 fw-bold my-2">
                Macbook
                <br />
                Rentals
              </h1>
              <p className="my-2">
                Exploring a Diversified Technology in umpteen Variants of
                MacBook Rentals
              </p>
              <a
                href="/html/dashboard.html"
                className="btn btn-primary btn-lg my-2"
              >
                RENT NOW
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/iPadBanner1920by600.jpg"
            className="d-block w-100"
            alt="iPad Rentals"
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="d-flex flex-column align-items-start justify-content-center h-100 carousel-custom">
              <h1 className="display-3 fw-bold my-2">
                IPAD
                <br />
                Rentals
              </h1>
              <p className="my-2">
                Upbringing and Fostering the Apex of Technology with renting
                iPads
              </p>
              <a
                href="/html/dashboard.html"
                className="btn btn-primary btn-lg my-2"
              >
                RENT NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
