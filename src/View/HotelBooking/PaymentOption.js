import React from 'react'
import logo from '../../images/logo.png'
export default function PaymentOption() {
    return (
        <>
            <div className='payment_option'>
                <div className='container'>
                    <div className='top'>
                        <img src={logo} />
                    </div>
                    <h2>Pay <span>$ 00,000</span> to confirm booking</h2>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-12'>
                            <div className='leftBox'>
                                <div className='topPart'>
                                    <div className='wrap'>
                                        <h4>Hotel Information, Address</h4>
                                        <div><a href="#" className='btnn'>Show Details <i class="fa-solid fa-angle-down"></i></a></div>
                                    </div>
                                    <div className='onclick_show'>
                                    <div className='flex_wrap'>
                                         
                          
                                  
                                            <div>
                                            <span className='mb-2'>1 Room for 2 Adults</span><h5>1 x Deluxe Room with free breakfast And Lunch/ Dinner</h5>
                                            <span>MAX 6 Guests | Complimentary Breakfast is av... | Complimentary Lunch Or Dinner... | 10% discount on Laundry servic... | Complimentary 1 Welcome Drink ...</span>
                                            </div>
                                          
                                        </div>
                                        <hr />
                                    <div className='flex_wrap'>
                                            <div><h5>24 Aug 2023 (Thu), 01:00 PM</h5>
                                            <span>Check in</span>
                                            </div>
                                            <div><h5>24 Aug 2023 (Thu), 01:00 PM</h5>
                                            <span>Check Out</span>
                                            </div>
                                          
                                        </div>
                                        <hr />
                                        <div className='flex_wrap'>
                                            <div><h5>Booking Details will be sent to :</h5>
                                
                                            </div>
                                            <div><h5>Mr, Rahul riy (primary)</h5>
                                            <span>koyacon750@gmail.com, +91 123 123 1234</span>
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                    <div className='defalt_show'>
                                        <div className='flex_wrap'>
                                            <h5>24 Aug 2023 (Thu)</h5>
                                            <h5>25 Aug 2023 (Thu)</h5>
                                            <h5 style={{ color: "#4D4D4D", fontWeight: "400" }}>1 Room for 2 Adults</h5>
                                        </div>
                                        <hr />
                                        <div className='flex_wrap'>
                                            <h5>Mr Rahul Roy</h5>

                                            <h5 style={{ color: "#4D4D4D", fontWeight: "400" }}>koyacon750@avidapro.com, +91 123 123 1234</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-12'>
                            <div className='price-details'>
                                <div className='top'>
                                    <h3>Grand Total</h3>
                                    <h3 style={{ color: "#4CB27F" }}>$ 00,000</h3>
                                </div>
                                <div className='wrap'>
                                    <h6>Room Changes (1 room X 1 night)</h6>
                                    <h6>-$ 00,000</h6>
                                </div>
                                <div className='wrap'>
                                    <h6 style={{ color: "#4CB27F", fontWeight: "600" }}>Total Discounts</h6>
                                    <h6 style={{ color: "#4CB27F", fontWeight: "600" }}>-$ 00,000</h6>
                                </div>
                                <div className='wrap'>
                                    <h6>GST on base price</h6>
                                    <h6>$ 00,000</h6>
                                </div>
                                <div className='wrap'>
                                    <h6>Service Fee</h6>
                                    <h6>$ 00,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
