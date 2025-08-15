import React, { useState } from 'react';

function ItemList({ id, name, price, handleClick, item }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleOnClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <tr className="border-b border-gray-200 text-center">
      <th scope="row" className="py-3 px-4 font-medium text-gray-900">
        {id}
      </th>
      <td className="py-3 px-4 text-gray-700">{name}</td>
      <td className="py-3 px-4 text-gray-700">${price}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => {
            handleClick(item);
            handleOnClick();
          }}
          type="button"
          className={`px-4 py-2 rounded font-semibold transition duration-200 ${
            isAdded
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </td>
    </tr>
  );
}

export default ItemList;
