import React, { useState } from 'react'
import logo from '../../images/logo.png'
import p1 from '../../images/p2 (3).png'
import p2 from '../../images/p2 (2).png'
import p3 from '../../images/p2 (1).png'
import p4 from '../../images/p1.png'
export default function PaymentOption() {
    const [onclickShow,setOnclickShow]= useState(false);
    const [defaltShow,setDefaltShow]= useState(true);
    const [showText, setShowText] =useState('Show Details');
    const handClickShow = ()=>{
        setOnclickShow(!onclickShow);
        setDefaltShow(!defaltShow);
        setShowText('Hide Details')

    }
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
                                        <div><a href="#" className='btnn' onClick={handClickShow}>{showText} <span className={onclickShow ? "fa-solid fa-chevron-up"  : "fa-solid fa-chevron-down "}></span></a></div>
                                    </div>
                                  {onclickShow &&
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

                                    </div>}
                                    {defaltShow &&
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
                                    </div>}

                                </div>

                                <div className='bottomPart'>
                                    <h2>All Payment Options</h2>
                                    <div className='boxx'>
                                    <div className='custom'>
                                        <div className='img'><img src={p1} /></div>
                                        <h4>UPI</h4>
                                    </div>
                                    <div className='custom'>
                                        <div className='img'><img src={p2} /></div>
                                        <h4>Credit/Debit Card</h4>
                                    </div>
                                    <div className='custom'>
                                        <div className='img'><img src={p3} /></div>
                                        <h4>Pay Later</h4>
                                    </div>
                                    <div className='custom'>
                                        <div className='img'><img src={p4} /></div>
                                        <h4>Mobile Wallet</h4>
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
