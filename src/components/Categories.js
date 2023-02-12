import React from 'react'
import navbar2 from './Navbar2';
import Category_card from './sub-components/Category_card';
import './styles/Categories.css'

function Categories() {
  return (
    <div className="containercategory">
      
    <div className='my-4 container'> 
      <Category_card title="South Indian" content="find the best south indian food here"/>
    </div>
    </div>
  )
}

export default Categories
