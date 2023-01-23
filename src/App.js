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
import Waiting from './components/Waiting';
import Payment from './components/Payment';


export default function App() {
  return (
    <>
     <Router>
    <Navbar1/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Categories" element={<Categories/>}/>
          <Route exact path="/Items" element={<Items/>}/>
          <Route exact path="/Payment" element={<Payment/>}/>
          <Route exact path="/Waiting" element={<Waiting/>}/>
          <Route exact path="/Arrived" element={<Arrived/>}/>
          <Route exact path="/Rating" element={<Rating/>}/>
          <Route exact path="/Thankyou" element={<Thankyou/>}/>
        </Routes>
      </div>
     </Router>
    </>
  );
}
