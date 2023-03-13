import React from 'react'
import {Link} from "react-router-dom"

// this is the card that displays categories
function Category_card({ name, imageURL }) {
  const urlWithBase=`http://localhost:8000${imageURL}`;
  return (
    // using card from bootstrap
    <div className='my-4'>
      <div className="card" style={{width: '18rem',borderRadius:"15px"}}>
        <img className="card-img-top" src={urlWithBase} alt="this is an image"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link className="btn btn-primary my-2 mx-2" to={`/Items/${name}`}>See items</Link>
        </div>
      </div>
    </div>
  )
}

export default Category_card

