import React from 'react'
import {Link} from "react-router-dom"


// var clickCount=0;
// function click(element) {
//     clickCount++;
//     if(clickCount%2!=0){
//         element.style.color = "red";
//         element.innerHTML="remove from list"
//     }   
//   }

function Items() {
  return (<>
<div className="container d-flex justify-content-between">
{/* <button type="button" class="btn btn-danger">Go back</button> */}
<Link className="btn btn-success"to="/Payment">Checkout</Link>

</div>
    <div className='container info-div overflow-auto' >
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
