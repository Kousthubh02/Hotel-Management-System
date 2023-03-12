import React, { useState, useEffect } from 'react';
import Category_card from './sub-components/Category_card';
import './styles/Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    fetch('http://localhost:8000/Category/')
    .then((response) => response.json())
    .then((data) => {
      setCategories(data);
      return data;
    })
    .then((data) => fetch(data[0].image))
    .then((response) => response.blob())
    .then((blob) => setImageURL(URL.createObjectURL(blob)))
    .catch((error) => console.log(error));
  
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div className="containercategory">
            <div className="col-md-6 col-lg-4 mb-4" key={category.id}>
              <Category_card key={category.id} name={category.name} img={category.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
