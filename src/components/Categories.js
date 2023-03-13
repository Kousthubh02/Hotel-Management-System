import React, { useState, useEffect } from 'react';
import Category_card from './sub-components/Category_card';
import './styles/Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [imageURL, setImageURL] = useState('');
 
  useEffect(() => {
    fetch('http://localhost:8000/Category/')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div className="containercategory" key={category.id}>
            <div className="col-md-6 col-lg-4 mb-4">
              <Category_card name={category.name} imageURL={category.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

