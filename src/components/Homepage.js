import React from "react";
import { Link } from "react-router-dom";

import Navbar2 from "./Navbar2";

function Homepage() {
  // const style={
  //   'height':'100vh',
  //   'width' : 'auto'
  // }
  return (
    <>
    <div className="container">
      <div id="carouselExampleIndicators" className="carousel slide">
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              /*style={style}*/ src="images/4.jpeg"
              className="d-block w-100 img-fluid"
              alt="this is an image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to myHotel</h5>
              <p>Connecting service with technology.</p>
              <button type="button" className="btn btn-primary">
              <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Categories"
                >
                  Place Order
                </Link>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/4.jpeg"
              className="d-block w-100 img-fluid"
              alt="this is an image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
              <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Categories"
                >
                  Place Order
                </Link>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "100%", width: "auto" }}
              src="images/4.jpeg"
              className="d-block w-100 img-fluid"
              alt="this is an image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
              <Link className="btn btn-primary" to="/Categories">Place Order</Link>
              </button>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default Homepage;
