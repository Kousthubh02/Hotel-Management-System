import React from 'react'
// this alert need to be displayed when the user click on add to cart
function Alert(props) {
   
  return (
    props.Alert && <div class={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
     <strong>{props.Alert.type}</strong>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert