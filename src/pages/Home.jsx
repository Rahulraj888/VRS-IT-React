import React from 'react'
import '../styles/home.css'

function Home() {

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
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
                  Affordable, Upgraded and Updated .. Laptop Rentals on your Finger Tips
                </p>
                <a href="/html/dashboard.html" className="btn btn-primary btn-lg b my-2">
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
                  Exploring a Diversified Technology in umpteen Variants of MacBook Rentals
                </p>
                <a href="/html/dashboard.html" className="btn btn-primary btn-lg my-2">
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
                  Upbringing and Fostering the Apex of Technology with renting iPads
                </p>
                <a href="/html/dashboard.html" className="btn btn-primary btn-lg my-2">
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

      {/* Our Rentals */}
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">Our Rentals</h1>
          <p className="col-lg-8 mx-auto lead">
            Your Reliable, Remarkable, and Revolutionary Solution for Top-Tech on Rent with VRS IT Rentals
          </p>
        </div>
      </div>

      <div className="container-fluid bg-body-tertiary">
        <div className="row">
          {/* Rent Laptops */}
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Rent Laptops</h3>
                <p className="card-text my-3">
                  Laptops which are not only Upgraded, but also affordable.
                </p>
                <a
                  href="/html/dashboard.html?category=Laptop"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  View All
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/MacBook.png"
                  alt="Thumbnail"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Rent MacBooks */}
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Rent MacBooks</h3>
                <p className="card-text my-3">
                  Enliven a Spirit of that Sleeky Aesthetic of the most Technical MacBooks.
                </p>
                <a
                  href="/html/dashboard.html?category=MacBook"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  View All
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  src="https://www.vrsitrentals.com/shop/wp-content/uploads/2024/02/MacBook.png"
                  alt="Thumbnail"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Rent? */}
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

      {/* Why to Rent Out? */}
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
    </>
  )
}

export default Home
