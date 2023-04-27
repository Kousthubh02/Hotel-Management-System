import React, { useState, useEffect } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import ItemList from "./ItemList";
import ProductList from "./ProductList";
import './styles/Items.css'
 
function Items({ id, name, price }) {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [cartItems, setCartItems] = useState([]);
  // function to add item in cart
  const handleClick = (item) => {
    if (cart.items.some((i) => i.id === item.id)) return;
    setCart({
      items: [...cart.items, item],
      total: cart.total + item.price,
    });
  };

  // function to remove item from cart
  const handleRemove = (id) => {
    const itemToRemove = cart.items.find((item) => item.id === id);
    setCart({
      items: cart.items.filter((item) => item.id !== id),
      total: cart.total - itemToRemove.price,
    });
  };

  // function to send cart data to backend API
// function to send cart data to backend API
const handleCheckout = () => {
  if (!cart.items.length) {
    console.error("Error: Cart does not have any items.");
    return;
  }

  const itemsInCart = cart.items.map(item => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1 // assuming all items have a quantity of 1
    }
  });

  const cartData = { items: itemsInCart }; // create object with 'items' key

  fetch("http://localhost:8000/checkout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData), // convert object to JSON string
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle success response from API
      console.log("Cart sent to API:", data);
    })
    .catch((error) => {
      // Handle error response from API
      console.error("Error sending cart to API:", error);
    });
};

  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [categoryNameState, setCategoryName] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/${categoryName}/?name=${name}&id=${id}&price=${price}`)
      .then((response) => response.json())
      .then((data) => setCategoryData(data));

    fetch(`http://localhost:8000/Category/`)
      .then((response) => response.json())
      .then((data) => setCategoryName(data));
  }, [categoryName]);

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <div className="container my-4 d-flex justify-content-end">
          <div>
            <button
              className="btn btn-warning"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              View Cart ({cart.items.length})
            </button>

            <div
              className="offcanvas offcanvas-start"
              data-bs-backdrop="static"
              tabIndex="-1"
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="staticBackdropLabel">
                  Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                <button 
  
  className="btn checkoutbtn btn-success my-2"
  onClick={handleCheckout} 
>
  <Link style={{ textDecoration: "none", color: "white" }} to='/Payment'>Checkout</Link>
</button>
                </div>
                {cart.items.map((item) => (
                 <ProductList
                 key={item.id}
                 id={item.id}
                 name={item.name}
                 price={item.price}
                 handleRemove={handleRemove}
                 cart={cart}
                 cartItems={cartItems}
                 handleCartChange={setCartItems}
               />
                ))}
                {cart.items.length === 0 && <p>Your cart is empty</p>}
                <p>Total: {cart.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container containertable info-div overflow-auto">
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
            {categoryData.map((curItem) => (
              <ItemList
              key={curItem.id}
              id={curItem.id}
              item={curItem}
              name={curItem.name}
              price={curItem.price}
              handleClick={handleClick}
              cartItems={cartItems}
              handleCartChange={setCartItems}
            />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;