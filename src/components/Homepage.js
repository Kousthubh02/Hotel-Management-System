import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Adjust the interval as needed
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Inner Content */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-content bg-primary text-white d-flex flex-column justify-content-center align-items-center p-5">
              <h1 className="display-3 mb-4">Welcome to myHotel</h1>
              <p className="lead mb-5">Experience luxury like never before.</p>
              <Link
                to="/Categories"
                className="btn btn-light btn-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-content bg-success text-white d-flex flex-column justify-content-center align-items-center p-5">
              <h1 className="display-3 mb-4">Connecting Service with Technology</h1>
              <p className="lead mb-5">Book your stay with ease.</p>
              <Link
                to="/Categories"
                className="btn btn-light btn-lg"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-content bg-warning text-dark d-flex flex-column justify-content-center align-items-center p-5">
              <h1 className="display-3 mb-4">Special Offers</h1>
              <p className="lead mb-5">Enjoy exclusive discounts on your next booking.</p>
              <Link
                to="/Categories"
                className="btn btn-dark btn-lg"
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Homepage;