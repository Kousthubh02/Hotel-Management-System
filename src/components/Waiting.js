import React from 'react'
import {Link} from "react-router-dom"

function Waiting() {
  return (
    <div className="container">
      <h2>You order arrives in _________ mins</h2>
      <Link to="/Arrived">Next</Link>

    </div>
  )
}

export default Waiting
