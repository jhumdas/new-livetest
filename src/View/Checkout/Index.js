import React from 'react'
import a from '../../images/Rectangle 423.png'
export default function Index() {
    return (
        <>
            <section className='checkout'>
                <div className='container'>
                    <div className='top'>
                        <h3>CHECKOUT</h3>
                        <h6>Continue Shopping</h6>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div>
                                <div>
                                    <h5>Person</h5>
                                    <span>Lorem ipsum</span><span className='pl-3'>+0123456789</span>
                                </div>
                                <div className='mt-3'>
                                    <h5>Delivery Address</h5>
                                    <div className='address mt-2'>
                                        <p>2nd Brick Lane, New York, USA
                                            Zip Code - 01234</p>
                                        <a>Change</a>
                                    </div>
                                </div>
                                <a
                                    className="shop_bg_btn mt-3 d-block"
                                    href="/order"
                                    style={{ maxWidth: "100%" }}
                                >
                                    Payment Method
                                </a>
                                <div className='paymentBox'>
                                    <div className="payment">
                                        <div>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Cradit/Debit Card
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="form-check-input input-radio on"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                defaultValue="option1"
                                                defaultChecked=""
                                            />
                                        </div>

                                    </div>
                                    <div className="">
                                        <input type="text" className="form-control" placeholder="MM / YY" />
                                    </div>
                                    <div className="inputBox">
                                        <div className="">
                                            <input type="text" className="form-control" placeholder="MM / YY" />
                                        </div>
                                        <div className="">
                                            <input type="text" className="form-control" placeholder="CVV" />
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <a
                                            className="shop_bg_btn"
                                            href="/order"
                                            style={{ background: "#25333A" }}
                                        >
                                            Pay $ 199
                                        </a>
                                    </div>
                                    <div className="payment">
                                        <div>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Net Banking
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="form-check-input input-radio on"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                defaultValue="option1"
                                                defaultChecked=""
                                            />
                                        </div>

                                    </div>
                                    <div className="payment">
                                        <div>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Cash on Delivery
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="form-check-input input-radio on"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                defaultValue="option1"
                                                defaultChecked=""
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='summeryBox'>
                                <h5 className='top-h'>Odear Summary (1)</h5>
                                <div className='product-details'>
                                    <img src={a} />
                                    <div className='cnt'>
                                  <h5>      <strong>Violate Headphone</strong></h5>
                                        <h5>Quantity<input type="number" placeholder='1' /></h5>
                                        <a href="#">More Details +</a>
                                    </div>
                                </div>
                               
                                <hr />
                                <div className="billingBox">
                                 
                                 <div className="box">
                                     <h5>Price</h5>
                                     <h6 style={{ color: "rgb(69, 90, 100)" }}>$ 149</h6>
                                 </div>
                                 <div className="box">
                                     <h5>Shipping</h5>
                                     <h6 style={{ color: "rgb(69, 90, 100)" }}>$  40</h6>
                                 </div>
                                 <div className="box">
                                     <h5>Tax</h5>
                                     <h6 style={{ color: "rgb(69, 90, 100)"}}>$  10</h6>
                                 </div>
                                 <hr/>
                                 <div className="box">
                                 <h5 style={{fontWeight:"700"}}>Total</h5>
                                     <h6 style={{ color: "rgb(69, 90, 100)",fontWeight:"700"}}>$ 199</h6>
                                 </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
