import React from 'react'
import items from './Items';
import {Link} from "react-router-dom"

function Arrived() {
  return (
    <div>

      <div className="container d-flex align-items-center justify-content-center" >
        <h2>Your Order Has Arrived!</h2>
      </div>
      <div className="container d-flex align-items-center justify-content-center" >
      <Link className="btn btn-primary btn-lg my-4 mx-4" to="/Categories">Place order again?</Link>
      <Link className="btn btn-danger btn-lg my-4 mx-4" to="/Rating">Exit Portal</Link>
      </div>
      
    </div>
  )
}

export default Arrived
