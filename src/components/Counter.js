import React, { useState } from "react";
import './styles/Counter.css'

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button className="counter" onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button className="counter" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;