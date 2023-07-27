import React from "react";
import search from '../images/search.png';
import icon1 from '../images/user.png';
import icon2 from '../images/love.png';
import icon3 from '../images/cart.png';
import { Link } from 'react-router-dom';
export default function ProductSearch() {
  return (
    <>
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-6 col-6 ordr1">
          <a className="nav_icon_search">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-12 ordr2">
          <form action="">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search for products"
              ></input>
              <div className="searchIcon">
                <img src={search} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-6 ordr3">
          <div className="from_icon_whish_cart_main">
          <div className="from_icon_whish_cart1">
              <Link to="/cart">
                <img src={icon3} alt="" />
              </Link>
            </div>
            <div className="from_icon_whish_cart1">
              <Link to="/wishlist">
                <img src={icon2} alt="" />
              </Link>
            </div>
            <div className="from_icon_whish_cart1">
              <Link to="/review">
                <img src={icon1} alt="" />
              </Link>
            </div>
          
         
          </div>
        </div>
      </div>
    </>
  );
}
