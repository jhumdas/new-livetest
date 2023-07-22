import React from 'react';
import './App.css';
import './View/Home/Home.css'
import '../src/View/News/News.css';
import '../src/View/About/About.css';
import '../src/View/Newsdetails/Newsdetails.css';
import '../src/View/Shop/Shop.css';
import '../src/View/SingleProduct/SingleProduct.css'
import '../src/View/Cart/Cart.css'
import '../src/View/Wishlist/Wishlist.css'
import '../src/View/MyOrder/Order.css'
import '../src/View/Review/Review.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from '../src/View/Home/index';
import About from '../src/View/About/Index';
import News from '../src/View/News/Index';
import Newsdetails from '../src/View/Newsdetails/Index';
import Shop from '../src/View/Shop/Index';
import SingleProduct from '../src/View/SingleProduct/Index';
import Cart from '../src/View/Cart/Index'
import Wishlist from '../src/View/Wishlist/Index'
import Order from '../src/View/MyOrder/Index'
import Review from '../src/View/Review/Index'
function App() {
  return (
    <React.Fragment>
        <Router>


          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={< Home />} />
              <Route path="/about" element={< About />} />
              <Route path="/news" element={< News />} />
              <Route path="/newsdetails" element={<Newsdetails/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/single-product" element={<SingleProduct/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/review" element={<Review/>}/>
            </Route>
          </Routes>


        </Router>
      </React.Fragment>
  );
}

export default App;
