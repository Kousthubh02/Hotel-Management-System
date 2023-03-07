import React from 'react'
import './styles/Thankyou.css'

function Thankyou() {
  setTimeout(() => {
    return window.location.replace("http://localhost:3000/");
  }, 10000);
  return (


    <div className="object container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
    <div className="containertext">
    <h1>Thank You !</h1>
  <p>Hope you enjoyed your meal</p>
  <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
  <p>Best regards,<br/>The Hotel Team</p>
    </div>
  </div>
  )
}

export default Thankyou
