import React from 'react';

function ProductList({ item, handleRemove, updateQuantity }) {
  return (
    <div className="border-b border-gray-200 py-3">
      <div className="flex justify-between">
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="bg-gray-200 px-2 rounded"
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="bg-gray-200 px-2 rounded"
          >
            +
          </button>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500 hover:underline ml-2"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
