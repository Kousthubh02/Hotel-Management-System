import React, { useState, useEffect } from 'react';
import Category_card from './sub-components/Category_card';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Category/')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 mt-5 mb-5">
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="text-center p-1 border border-white/20 rounded-[50px] bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] m-2"
          >
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <Category_card name={category.name} imageURL={category.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
