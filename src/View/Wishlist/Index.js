import React from "react";
import ProductSearch from "../../Component/ProductSearch";
import best_selling1 from "../../images/best_selling1.png";
import best_selling_icon from "../../images/best_selling_icon.png";
import cart from '../../images/redcart.png'
export default function Index() {
  return (
    <>
      <section className="wishlist">
        <div className="container">
          <ProductSearch />
          <div className="mt-5">
            <h3>
              <i class="fa-regular fa-heart"></i> My Wishlist 2 Item{" "}
            </h3>
            <div className="product-detailsBox mt-4">
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

                <h6>
                  <strong>$ 100</strong>
                </h6>
                <div className="mt-2">
                  <a href="#" className="AddressBtn">
                  <img src={cart} className="mr-2"/>
                    Move to cart
                  </a>
                  <a
                    href="#"
                    className="shop_bg_btn"
                    style={{ backgroundColor: "#44ED98" }}
                  >
                    In stock
                  </a>
                </div>
              </div>
            </div>
            <div className="product-detailsBox mt-4">
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

                <h6>
                  <strong>$ 100</strong>
                </h6>
                <div className="mt-2">
                  <a href="#" className="AddressBtn">
                    <img src={cart} className="mr-2"/>
                    Move to cart
                  </a>
                  <a
                    href="#"
                    className="AddressBtn"
                    style={{ borderColor: "#797979", color:'#797979' }}
                  >
                  Out of stock
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
