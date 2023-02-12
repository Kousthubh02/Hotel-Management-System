import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
// this is the card that displays categories
function Category_card(props) {
  return (
    // using card from bootstrap
    <div>
      <div className="card" style={{width: '18rem',borderRadius:"15px"}}>
  <img src="images/south.jpg" className="card-img-top" alt="this is an image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <Link className="btn btn-primary" to="/Items">See items</Link>
  </div>
</div>
    </div>
  )
}

export default Category_card
// add the proptypes here
Category_card.propTypes={title:PropTypes.string,content:PropTypes.string};

// setting the default props
Category_card.defaultProps={
    title:"set title",
    content:"about this category",
};
