import React, { useState } from 'react';

function Counter({ name = "Dish" }) {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Dish Name */}
      <span className="text-gray-800 font-medium text-base">{name}</span>

      {/* Counter Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={decrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded"
        >
          −
        </button>

        <span className="w-8 text-center text-lg font-semibold">{count}</span>

        <button
          onClick={increment}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
