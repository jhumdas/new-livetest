import React from "react";
import search from '../images/search.png';
import icon1 from '../images/user.png';
import icon2 from '../images/love.png';
import icon3 from '../images/cart.png';
import icon4 from '../images/threeplus.png';
import icon5 from '../images/pepicons-pencil_crown.png';
import icon6 from '../images/bi_download.png';
import icon7 from '../images/fluent_hat-graduation-16-regular.png';
import icon9 from '../images/icon9.png';
import icon8 from '../images/icon8.png';
import iconv from '../images/carbon_result-new.png';
import iconw from '../images/icon-park-solid_more-four.png';
import { Link } from 'react-router-dom';

export default function SearchCourse(props) {
    const { searchText, iconA = true,  iconD = false, iconE = false, iconF = false, iconG = false ,iconH =false, iconI=false,iconV=false,iconW=false} = props;
    return (
        <>

            <div className="row">

                <div className="col-xl-9 col-lg-9 col-md-12 col-12 ordr2">
                    <form action="" className='searchInput'>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder={searchText}
                            ></input>
                            <div className="searchIcon">
                                <img src={search} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-12 ordr3">
                    <div className="from_icon_whish_cart_main" style={{ justifyContent: "flex-start" }}>
                        {iconA && <div className="from_icon_whish_cart1">
                            <Link to="/cart">
                                <img src={icon3} alt="" />
                                <span className="cart-number">2</span>
                            </Link>
                        </div>}
                
                        {iconD && <div className="from_icon_whish_cart1">
                            <Link to="/ott-watchlist">
                                <img src={icon4} alt="" />
                            </Link>
                        </div>}
                        {iconE && <div className="from_icon_whish_cart1">
                            <Link to="/subscription">
                                <img src={icon5} alt="" />
                            </Link>
                        </div>}
                        {iconF && <div className="from_icon_whish_cart1">
                            <Link to="ott-download">
                                <img src={icon6} alt="" />
                            </Link>
                        </div>}

                        {iconG && <div className="from_icon_whish_cart1">
                            <Link to="/my-course">
                                <img src={icon7} alt="" />
                            </Link>
                        </div>}
                        {iconH   && <div className="from_icon_whish_cart1">
                            <Link to="/portfolio">
                               <img src={icon9} alt=""/>
                            </Link>
                          </div>}

                        {iconI &&  <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={icon8} alt=""/>
                            </Link>
                          </div>}
                          {iconV &&  <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={iconv} alt=""/>
                            </Link>
                          </div>}
                          {iconW &&  <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={iconw} alt=""/>
                            </Link>
                          </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
