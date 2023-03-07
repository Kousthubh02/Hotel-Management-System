import React from "react";
import { Link } from "react-router-dom";
import './styles/Payment.css'


function Payment() {
  return (
    <div>
      <div>
      <div class="containerpay">
        {" "}
        <div class="wrapper">
          {" "}
          <div class="outer-card">
            {" "}
            <div class="forms">
              {" "}
              <div class="input-items">
                {" "}
                <span>Card Number</span>{" "}
                <input
                  placeholder=".... .... .... ...."
                  data-slots="."
                  data-accept="\d"
                  size="19"
                />{" "}
              </div>{" "}
              <div class="input-items">
                {" "}
                <span>
                  Name on card
                </span> <input placeholder="Enter your name" />{" "}
              </div>{" "}
              <div class="one-line">
                {" "}
                <div class="input-items">
                  {" "}
                  <span>Expiry Date</span>{" "}
                  <input placeholder="mm/yyyy" data-slots="my" />{" "}
                </div>{" "}
                <div class="input-items">
                  {" "}
                  <span>CVV</span>{" "}
                  <input
                    placeholder="..."
                    data-slots="."
                    data-accept="\d"
                    size="3"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div class="input-buttons">
               <Link to="/Waiting">Pay</Link> {" "}
                {" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
    </div>
  );
}

export default Payment;
