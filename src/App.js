import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from './components/Items';
import Categories from './components/Categories';
import Arrived from './components/Arrived';
import Rating from './components/Rating';
import Thankyou from './components/Thankyou';
import Payment from './components/Payment';
import Timer from './components/mini-component/Timer';
import Cart from './components/Cart';
import Staff from './components/StaffLogin';
import StaffPortal from './components/StaffPortal';
import React, { useState,useEffect } from "react";

export default function App() {
  const [cart,setCart]=useState([]);
  
  return (
    <>
     <Router>
      <Navbar1/>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Categories" element={<Categories/>}/>
          <Route exact path="Items/:categoryName" element={<Items/>}/>
          <Route exact path="/Payment" element={<Payment/>}/>
          <Route exact path="/Waiting" element={<Timer/>}/>
          <Route exact path="/Arrived" element={<Arrived/>}/>
          <Route exact path="/Rating" element={<Rating/>}/>
          <Route exact path="/Thankyou" element={<Thankyou/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/Staff" element={<Staff/>}/>
          <Route exact path="/StaffPortal" element={<StaffPortal/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
     </Router>
    </>
  );
}
