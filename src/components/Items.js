import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ProductList from "./ProductList";

function Items({ id, name, price }) {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (item) => {
    if (cart.items.some((i) => i.id === item.id)) return;
    setCart({
      items: [...cart.items, item],
      total: cart.total + item.price,
    });
  };

  const handleRemove = (id) => {
    const itemToRemove = cart.items.find((item) => item.id === id);
    setCart({
      items: cart.items.filter((item) => item.id !== id),
      total: cart.total - itemToRemove.price,
    });
  };

  const handleCheckout = () => {
    if (!cart.items.length) {
      console.error("Error: Cart does not have any items.");
      return;
    }

    const itemsInCart = cart.items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    }));

    fetch("http://localhost:8000/checkout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: itemsInCart }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart sent to API:", data);
      })
      .catch((err) => {
        console.error("Error sending cart to API:", err);
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
    <div className="w-full px-4 py-6">
      {/* Cart Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
          type="button"
          onClick={() => document.getElementById("cartSidebar").classList.remove("hidden")}
        >
          View Cart ({cart.items.length})
        </button>
      </div>

      {/* Sidebar (Cart) */}
      <div
        id="cartSidebar"
        className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg p-6 z-50 overflow-y-auto hidden"
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-semibold">Cart</h5>
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => document.getElementById("cartSidebar").classList.add("hidden")}
          >
            ✕
          </button>
        </div>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded w-full mb-4"
          onClick={handleCheckout}
        >
          <Link to="/Payment" className="text-white no-underline w-full inline-block">
            Checkout
          </Link>
        </button>

        {cart.items.length === 0 && <p className="text-gray-600">Your cart is empty</p>}

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

        <p className="mt-4 font-semibold">Total: ${cart.total.toFixed(2)}</p>
      </div>

      {/* Item Table */}
      <div className="overflow-x-auto bg-white rounded shadow p-4">
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Action</th>
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
