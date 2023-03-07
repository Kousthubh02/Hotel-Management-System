import React from 'react'
import {Link} from "react-router-dom"
import './styles/Items.css'




function Items() {
  return (
  <>
<div className="container d-flex justify-content-between">
<div className="container my-4 d-flex justify-content-end">
   
<div>
<button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  View Cart
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>      
      <Link className="btn btn-success my-2"to="/Payment">Checkout</Link>
    </div>
    <div>
              <div class="row mb-4 d-flex justify-content-between align-items-center">
                
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <h6 class="text-black mb-0">item1</h6>
                </div>
                
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 class="mb-0">Rs 400</h6>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                <button className="btn btn-danger">Remove</button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-muted">
                    <i class="fas fa-times"></i>
                  </a>
                </div>
              </div>

              <hr class="my-4" />

              <div class="row mb-4 d-flex justify-content-between align-items-center">
                
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <h6 class="text-black mb-0">item 2</h6>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 class="mb-0">Rs 400</h6>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                <button className="btn btn-danger">Remove</button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-muted">
                    <i class="fas fa-times"></i>
                  </a>
                </div>
              </div>

              <hr class="my-4" />

              <div class="row mb-4 d-flex justify-content-between align-items-center">
              
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <h6 class="text-black mb-0">item 3</h6>
                </div>
                
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 class="mb-0">Rs 400</h6>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                  <button className="btn btn-danger">Remove</button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-muted">
                    <i class="fas fa-times"></i>
                  </a>
                </div>
              </div>

              <hr class="my-4" />
            </div>
  </div>
</div>
</div>
</div>


</div>
    <div className='container containertable info-div overflow-auto' >
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>item 1</td>
      <td>200</td>
      <td> <button /*onClick={click(this)}*/ type="button" className="btn btn-primary">Add to list</button> </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>item 2</td>
      <td>300</td>
      <td><button /*onClick={click(this)}*/ type="button" className="btn btn-primary">Add to list</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >item 3</td>
      <td >50</td>
      <td><button /*onClick={click(this)}*/ type="button" className="btn btn-primary">Add to list</button></td>
    </tr>
  </tbody>
</table>
    </div>
    
  </>
  )
}

export default Items
