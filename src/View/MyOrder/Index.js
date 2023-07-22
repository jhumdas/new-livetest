import React from "react";
import p from "../../images/profile2.png";
import best_selling1 from "../../images/best_selling1.png";
import best_selling_icon from "../../images/best_selling_icon.png";
export default function Index() {
  return (
    <>
      <section className="my-order">
        <div className="container">
          <div className="profileBox mb-4">
            <div className="profileImg">
              <img src={p} />
            </div>
            <div className="profile-cnt">
              <h6>Hello</h6>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="filter">
                <h6 className="mb-3">Filter</h6>

                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  On the way
                  </label>
                </div>
                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  Delivered
                  </label>
                </div>
                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  Cancelled
                  </label>
                </div>
                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  Returned
                  </label>
                </div>
                <h6 className="mb-3">Order Time</h6>

                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  Last 30 Days
                  </label>
                </div>
                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  2023
                  </label>
                </div>
                <div className="form-group form-check mycheckinput">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                  2022
                  </label>
                </div>
          
              
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div>
              <div className="product-detailsBox">
                  <div className="product">
                    <div className="best_selling_product_bg">
                      <img src={best_selling1} alt="/"></img>
                    
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
                <div className="product-detailsBox mt-3">
                  <div className="product">
                    <div className="best_selling_product_bg">
                      <img src={best_selling1} alt="/"></img>
                    
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
          </div>
        </div>
      </section>
    </>
  );
  }