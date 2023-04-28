import React from 'react'
import Counter from './Counter'
function ProductList({id,name,price,handleRemove}) {
  
  return (
       <div>
              <div className="row mb-4 d-flex justify-content-between align-items-center">
                
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h6 className="text-black mb-0">{name}</h6>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3">
                  <Counter/>
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 className="mb-0">{price}</h6>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                <button className="btn btn-danger" onClick={()=>handleRemove(id)}>Remove</button>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-muted">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
              <hr className="my-4" />
            </div>
  )
}

export default ProductList
