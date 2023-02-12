import React from 'react'
import {Link} from "react-router-dom"

function Rating() {
  return (
    <div>
      <div className="container">
        <h2>Please rate our dishes</h2>
<div className="container d-flex justify-content-center">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Rate</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>item1</td>
      <td>
      
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>item2</td>
      <td>
      
      <i className="bi bi-star">stars</i>
      </td>
   
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">item3</td>
      <td colSpan="2">
      <span className= "fa fa-star checked"></span>
      <span className= "fa fa-star checked"></span>
      <span className= "fa fa-star checked"></span>
      <span className= "fa fa-star unchecked"></span>
      <span className= "fa fa-star unchecked"></span>
      </td>
  
    </tr>
  </tbody>
</table>
</div>
      
{/* <Link to="/ThankYou">Thankyou</Link> */}
<div className="container d-flex justify-content-center">
<button type="button" className="btn btn-success ">
              <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/ThankYou"
                >
                  Submit
                </Link>
              </button>

</div>

    </div>
    </div>
  )
}

export default Rating
