import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Payment.css'

function Payment() {
  const [cartItems, setCartItems] = useState([]);

  function handlePaymentSubmit(event) {
    event.preventDefault();

    // Send a POST request to the backend API with the list of items in the cart
    fetch('http://localhost:8000/staff-portal/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend API
        console.log('Payment processed successfully:', data);
        // Show a success message to the user
        alert('Payment processed successfully! Thank you for your purchase.');
        // Redirect the user to a success page
        window.location.href = '/success';
      })
      .catch(error => {
        // Handle errors
        console.error('Error processing payment:', error);
        alert('There was an error processing your payment. Please try again later.');
      });
  }

  return (
    <>
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
                    <button onClick={handlePaymentSubmit}>Pay</button>{" "}
                    {" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default Payment;