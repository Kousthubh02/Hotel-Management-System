import React from 'react';
import { Link } from 'react-router-dom';

function Category_card({ name, imageURL }) {
  const urlWithBase = `http://localhost:8000${imageURL}`;
  return (
    <div className="my-4">
      <div className="card w-72 rounded-[15px] shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={urlWithBase} alt={name} />
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{name}</h5>
          <Link 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            to={`/Items/${name}`}
          >
            See items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category_card;
