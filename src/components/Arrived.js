import React from "react";
import items from "./Items";
import { Link } from "react-router-dom";
import "./styles/Arrived.css";

function Arrived() {
  return (
    <div
      className="container d-flex inline-block justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container2 ">
        <h1>Your Order Has Arrived!</h1>
        <p>
          We're happy to let you know that your order is now ready for pickup or
          delivery.
        </p>
        <div className="container d-flex align-items-center justify-content-center">
          <Link className="btn btn-primary btn-lg my-4 mx-4" to="/Categories">
            Place order again?
          </Link>
          <Link className="btn btn-danger btn-lg my-4 mx-4" to="/Rating">
            Exit Portal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Arrived;
