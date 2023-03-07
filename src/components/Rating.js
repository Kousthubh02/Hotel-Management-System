import React from 'react'
import './styles/Rating.css'
import { Link } from "react-router-dom";




function Rating() {
  return (
    <>
    <div className="containerrating">

    <div class="main-container">
    <h1>How did we do?</h1>

  <p>Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>

 <ul>
  <li><button class="btn">1</button></li>
  <li><button class="btn">2</button></li>
  <li><button class="btn">3</button></li>
  <li><button class="btn">4</button></li>
  <li><button class="btn">5</button></li>
 </ul>


<div className="container d-flex justify-content-center">
 <Link to="/Thankyou" class="btn-sumbit" id="sumbit"> Submit</Link>
</div>

  </div>
  {/* <!-- Rating state end -->

  <!-- Thank you state start --> */}

  <div class="thank-you hidden">
    <img src="./images/illustration-thank-you.svg" alt=""/>
  <p class="gray">You selected <span id="rating">5</span> out of 5</p>

  <h2>Thank you!</h2>

  <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    dont hesitate to get in touch!
  </p>
  <button class="btn-sumbit" id="rate-again">Rate Again</button>
  </div>
  </div>
    </>
  );
}

export default Rating
