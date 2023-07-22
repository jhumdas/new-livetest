import React from "react";
import best_selling1 from "../../images/best_selling1.png";
import ProfileBox from "../../Component/ProfileBox";
import b from "../../images/Mask group.png";
export default function Index() {
  return (
    <>
      <section className="review">
        <div className="container">
          <ProfileBox />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div>
                <div className="ReviewFirstBox">
                  <img src={b} />
                  MY ORDERS
                </div>
                <div className="ReviewSecondBox mt-3">
                  <div id="accordionExample" className="accordion ">
                    <div className="card">
                      <div
                        id="headingOne"
                        className="card-header bg-white border-0"
                      >
                        <h2 className="mb-0">
                          <i class="fa-solid fa-user"></i>
                          <button
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            className="btn btn-link collapsible-link"
                          >
                            ACCOUNT SETTINGS
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                        className="collapse show"
                      >
                        <div className="card-body">
                          <a href="#">Manage Addresses</a>
                          <a href="#">Review & ratings</a>
                          <a href="#">Notification</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div
                className="product-detailsBox"
                style={{ position: "relative" }}
              >
                <div className="threedot">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="product">
                  <div className="best_selling_product_bg">
                    <img src={best_selling1} alt="/"></img>
                  </div>
                </div>
                <div className="Productdetails">
                  <h4>Product Name</h4>
                  <h5 style={{ fontSize: "18px", margin: "24px 0" }}>
                    <span
                      style={{
                        padding: "10px",
                        background: "#FFC700",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                    >
                      <i class="fa-solid fa-star"></i> 5.0{" "}
                    </span>{" "}
                    Good Product
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>

                  <h6>
                    <strong>Deliver by 25th march, 2023</strong>
                  </h6>
                </div>
              </div>
              <div className="starBox">
                <a>
                  <i class="fa-regular fa-star"></i>
                </a>
                <a>
                  <i class="fa-regular fa-star"></i>
                </a>
                <a>
                  <i class="fa-regular fa-star"></i>
                </a>
                <a>
                  <i class="fa-regular fa-star"></i>
                </a>
                <a>
                  <i class="fa-regular fa-star"></i>
                </a>
              </div>
              <div className="my-3">
                <textarea placeholder="Write Your Review"></textarea>
              </div>
              <div>
                <a href="#" className="shop_bg_btn">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
