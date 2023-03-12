import React, { useState } from 'react';

function ItemList({ id, name, price, handleClick, item }) {
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [buttonClass, setButtonClass] = useState('btn btn-primary');

  const handleOnClick = () => {
    setButtonText('Added to Cart');
    setButtonClass('btn btn-success');
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => {
          handleClick(item);
          handleOnClick();
        }} type="button" className={buttonClass}>
          {buttonText}
        </button>
      </td>
    </tr>
  );
}

export default ItemList;
