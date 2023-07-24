import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import best_selling2 from '../../images/best_selling2.png';
import best_selling3 from '../../images/best_selling3.png';
import ProductSearch from "../../Component/ProductSearch";
import best_selling1 from "../../images/best_selling1.png";
import best_selling_icon from "../../images/best_selling_icon.png";
import bb from "../../images/mdi-light_tag.png";
export default function Index() {
  var settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
  return (
    <>
      <section className="CartPage">
        <div className="container">
          <ProductSearch />

          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="mt-5">
                <div className="address-box">
                  <div>
                    <h6>
                      Deliver to: <strong>Lorem Ipsum , Zip code: 88011</strong>
                    </h6>
                    <p>131 N Roadrunner Pkwy, Las Cruces, New York</p>
                  </div>
                  <div>
                    <a href="#" className="AddressBtn">
                      Add Address
                    </a>
                  </div>
                </div>
                <div className="removeProduct">
                  <h6>
                    <i class="fa-solid fa-square-check tick"></i>{" "}
                    <strong>1/1 Products</strong>
                  </h6>
                  <a>
                    <i class="fa-regular fa-trash-can"></i> Remove
                  </a>
                </div>
                <div className="product-detailsBox">
                  <div className="product">
                    <div className="best_selling_product_bg">
                      <img src={best_selling1} alt="/"></img>
                      <div className="best_selling_product_icon">
                        <img src={best_selling_icon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="Productdetails">
                    <h4>Product Name</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="form-group">
                      <select
                        multiple=""
                        className="form-control"
                        id="exampleFormControlSelect2"
                      >
                        <option>Qty 1</option>
                        <option>Qty 2</option>
                        <option>Qty 3</option>
                      </select>
                      <select
                        multiple=""
                        className="form-control"
                        id="exampleFormControlSelect2"
                      >
                        <option>Size 5.5</option>
                        <option>Size 5.6</option>
                        <option>Size 5.8</option>
                      </select>
                    </div>
                    <h6>
                      <strong>$ 100</strong>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="mt-5">
                <div className="couponBox">
                  <h3>
                    Apply Coupon <img src={bb} />
                  </h3>
                  <div className="d-flex">
                    <input placeholder="Apply Coupon code"></input>
                    <a href="#" className="shop_bg_btn">
                      Apply
                    </a>
                  </div>
                </div>
                <div className="billingBox">
                  <div className="billingBoxWrap">
                    <h3>Price Details</h3>
                    <div className="box">
                      <h5>Total Price</h5>
                      <h6  style={{color:"#455A64"}}>$ 100</h6>
                    </div>
                    <div className="box">
                      <h5>Tax</h5>
                      <h6  style={{color:"#1FAF38"}}>$ 50</h6>
                    </div>
                    <div className="box">
                      <h5>Coupon Discount</h5>
                      <h6 style={{color:"#FF3A44",fontSize:"10px"}}>Apply coupon</h6>
                    </div>
                    <div className="box">
                      <h5>Shipping Charge</h5>
                      <h6 style={{color:"#1FAF38"}}>$ 00</h6>
                    </div>
                  </div>
                  <div style={{padding:"0 20px"}}>
                    <div className="box mt-3">
                      <h5 style={{color:"#000"}}><strong>Total Amount</strong></h5>
                      <h6><strong>$ 150</strong></h6>
                    </div>
                    <Link
                      to="/order"
                      className="shop_bg_btn mt-3 d-block"
                      style={{ maxWidth: "100%" }}
                    >
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className='shop_best_selling_prdt'>
                <div className='container'>
                    <div className='best_selling_txt'>
                        <h2>BEST SELLING PRODUCT</h2>
                    </div>
                    <Slider {...settings1}>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling1} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>

                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling2} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling3} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling1} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling2} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling3} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                <div className='best_selling_product_txt_main'>
                                    <h4 className='best_selling_product_txt1'>
                                        Product Name
                                    </h4>
                                    <p className='best_selling_product_txt2'>
                                        $ 100
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
      </section>
    </>
  );
}
