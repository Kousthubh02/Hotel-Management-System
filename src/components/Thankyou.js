import React from 'react'
import './styles/Thankyou.css'

function Thankyou() {
  return (

    <div className="object container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
    <div className="containertext">
    <h1>Thank You for Your Booking!</h1>
  <p>Your reservation has been received and confirmed. We look forward to welcoming you to our hotel.</p>
  <p>A confirmation email has been sent to the email address you provided during the booking process.</p>
  <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
  <p>Best regards,<br/>The Hotel Team</p>
    </div>
  </div>
  )
}

export default Thankyou
