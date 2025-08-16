import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ProductList from "./ProductList";

function Items({ id, name, price }) {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [categoryData, setCategoryData] = useState([]);
  const { categoryName } = useParams();

  const handleClick = (item) => {
    const existingItem = cart.items.find((i) => i.id === item.id);

    if (existingItem) {
      const updatedItems = cart.items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart({
        items: updatedItems,
        total: cart.total + item.price,
      });
    } else {
      setCart({
        items: [...cart.items, { ...item, quantity: 1 }],
        total: cart.total + item.price,
      });
    }
  };

  const handleRemove = (id) => {
    const itemToRemove = cart.items.find((item) => item.id === id);
    if (!itemToRemove) return;

    const updatedItems = cart.items.filter((item) => item.id !== id);
    const newTotal = cart.total - itemToRemove.price * itemToRemove.quantity;

    setCart({ items: updatedItems, total: newTotal });
  };

  const updateQuantity = (id, delta) => {
    const updatedItems = cart.items.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1,
        };
      }
      return item;
    });

    const newTotal = updatedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    setCart({ items: updatedItems, total: newTotal });
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
      quantity: item.quantity,
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

  useEffect(() => {
    fetch(`http://localhost:8000/${categoryName}/?name=${name}&id=${id}&price=${price}`)
      .then((response) => response.json())
      .then((data) => setCategoryData(data));
  }, [categoryName, id, name, price]);

  return (
    <div className="w-full px-4 py-6">
      <div className="flex justify-end mb-6">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
          type="button"
          onClick={() => document.getElementById("cartSidebar").classList.remove("hidden")}
        >
          View Cart ({cart.items.length})
        </button>
      </div>

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
            item={item}
            handleRemove={handleRemove}
            updateQuantity={updateQuantity}
          />
        ))}

        <p className="mt-4 font-semibold">Total: ${cart.total.toFixed(2)}</p>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow p-4">
        <table className="min-w-full text-center border border-gray-200 table-fixed">
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;
