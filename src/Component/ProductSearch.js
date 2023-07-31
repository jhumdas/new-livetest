import React from "react";
import search from '../images/search.png';
import icon1 from '../images/user.png';
import icon2 from '../images/love.png';
import icon3 from '../images/cart.png';
import icon4 from '../images/threeplus.png';
import icon5 from '../images/pepicons-pencil_crown.png';
import icon6 from '../images/bi_download.png';
import { Link } from 'react-router-dom';
export default function ProductSearch(props) {
  const { iconA = true, iconB = true, iconC = true, iconD = false, iconE = false, iconF = false } = props;
  return (
    <>
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-6 col-2 ordr1">
          <Link to="/category" className="nav_icon_search">
            <i class="fa-solid fa-bars"></i>
          </Link>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-12 ordr2">
          <form action="" className='searchInput'>
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-10 ordr3">
          <div className="from_icon_whish_cart_main" style={{ justifyContent: "flex-start" }}>
            {iconA && <div className="from_icon_whish_cart1">
              <Link to="/cart">
                <img src={icon3} alt="" />
              </Link>
            </div>}
            {iconB && <div className="from_icon_whish_cart1">
              <Link to="/wishlist">
                <img src={icon2} alt="" />
              </Link>
            </div>}
            {iconC && <div className="from_icon_whish_cart1">
              <Link to="/manage-address">
                <img src={icon1} alt="" />
              </Link>
            </div>}
            {iconD && <div className="from_icon_whish_cart1">
              <Link to="">
                <img src={icon4} alt="" />
              </Link>
            </div>}
            {iconE && <div className="from_icon_whish_cart1">
              <Link to="">
                <img src={icon5} alt="" />
              </Link>
            </div>}
            {iconF && <div className="from_icon_whish_cart1">
              <Link to="">
                <img src={icon6} alt="" />
              </Link>
            </div>}


          </div>
        </div>
      </div>
    </>
  );
}
