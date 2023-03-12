// working code to fetch items but fetching only one 

import React, { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import ItemList from './ItemList';
import ProductList from "./ProductList";
function Items({id,name,price})  {

  
  const [cart,setCart]=useState([]);

// function to add item in cart
  const handleClick=(item)=>{
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log('pushed');
  }
// function to remove item from cart
  const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id!==id);
    setCart(arr);
  }

  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [categoryNameState, setCategoryName] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/${categoryName}/?name=${name}&id=${id}&price=${price}`)
      .then(response => response.json())
      .then(data => setCategoryData(data));
      
    fetch(`http://localhost:8000/Category/`)
      .then(response => response.json())
      .then(data => setCategoryName(data));
  }, [categoryName]);
  
  return (
  <div>
<div className="container d-flex justify-content-between">
<div className="container my-4 d-flex justify-content-end">
   
<div>
<button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  View Cart
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>      
      <Link className="btn btn-success my-2"to="/Payment">Checkout</Link>
    </div>
    {
      cart.map((item)=>{
       return <ProductList id={item.id} name={item.name} price={item.price} handleRemove={handleRemove}/>

      })
    }
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
  {
  categoryData.map((curItem)=>{
    return <ItemList key={curItem.id} id={curItem.id} item={curItem} name={curItem.name} price={curItem.price} handleClick={handleClick}/>
  })
}

  </tbody>
</table>
    </div>
  
    </div>
  );
}

export default Items;