import React from 'react'
import './styles/StaffPortal.css'
function StaffPortal() {
  return (
    <div className="container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
        <div className="container bg">
        <div className="container">
           <h1>
            Staff Portal
           </h1>
            </div>
        <table class="table table-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Table no.</th>
      <th scope="col">Order</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default StaffPortal
