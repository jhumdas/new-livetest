import React from 'react'
import l from '../../images/location.png'
import sh1 from '../../images/hotel10.png'
import a from '../../images/hotel11.png'
import b from '../../images/hotel12.png'
import e from '../../images/hotel14.png'
export default function SingleBooking() {
    return (
        <>

            <div className='topRedPartWrap'>

                <div className='container'>
                    <div className='topRedPart'>
                        <div>
                            <h6>AREA, LANDMARK OR PROPERTY NAME</h6>
                            <input type="text" placeholder='Search Hotel Name' />
                        </div>
                        <div>
                            <h6>CHECK IN</h6>
                            <input type="text" placeholder='DD-MM-YYYY' />
                        </div>
                        <div>
                            <h6>CHECK OUT</h6>
                            <input type="text" placeholder='DD-MM-YYYY' />
                        </div>
                        <div>
                            <h6>GUEST & ROOMS</h6>
                            <input type="text" placeholder='0 Adults. 0 Child. 0 Room' />
                        </div>
                        <div><a>Search</a></div>
                    </div>
                </div>
            </div>


            <div className='Singlehotel_details'>
                <div className='container'>
                    <h5>Hotel Regent Grand
                        <span>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                    </h5>
                    <h6><img src={l} className='mr-2' />2/6, East Patel Nagar, Opposit Metro Pillar No 167 - <a href="#">View map </a></h6>
                    <div className='row mt-3'>
                        <div className='col-lg-4 col-md-12 col-12'>
                            <div className='left'>
                                <img src={sh1} />
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12'>
                            <div className='right'>
                                <div className='Gallery'>
                                    <img src={a} />
                                    <img src={b} className='lastImg' />
                                </div>
                                <div className='right-cnt'>
                                    <h6 className=''>Price start at</h6>
                                    <h3 className='my-2'>$ 0000</h3>
                                    <div className='d-flex' style={{ justifyContent: "space-between", alignItems: 'center' }}>
                                        <div>
                                            <h6>000 taxes & fees</h6>
                                            <button>0 Room per Day</button>
                                        </div>
                                        <div>
                                            <h6>0 X Guest</h6>
                                            <h6 className='mt-2'>0 X Guest</h6>
                                        </div>
                                    </div>
                                    <a className='search_hotel_Btn w-100 text-center mt-4'>View 0 Rooms Options</a>
                                    <div className='greemText'>Free Breakfast Available</div>
                                    <div className='border_box'>
                                        <h5><span>Check in</span>00:00 AM</h5>
                                        <h5><span>Check out</span>00:00 PM</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='hotel_needthings'>
                    <a href="#">Room</a>
                    <a href="#">Amenities</a>
                    <a href="#">Food & Dining</a>
                    <a href="#">Guest Review</a>
                    <a href="#">Policies</a>
                    <a href="#">Location</a>
                    <a href="#">About</a>
                    <a href="#">QNA</a>
                    <a href="#">Similar Properties</a>
                </div>
                <div className='For_Hotel_rooms'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='left_side'>
                                <img src={e} />
                                <div className='space_details'>
                                    <h6>Accommodates 0 Adults</h6>
                                    <h6>000 sq.ft.</h6>
                                </div>
                                <div className='space_details'>
                                    <h6>King Bed Size Bed</h6>
                                    <h6>No View</h6>
                                </div>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <a href="#" className='more'>View More Details</a>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12'>
                            <div className='right_side'>
                                <div className='top'>
                                    <h5>Room Options</h5>
                                    <h5>Price</h5>
                                </div>
                                <div className='room_box'>
                                    <h5>1 . Room Only | Free Cancellation</h5>
                                    <div>
                                        <h6>Risk Free Booking!</h6>
                                        <h6>10 % Discount On F&B Services</h6>
                                        <h6><strong>Free Cancellation till Check in</strong></h6>
                                        <h6><strong>View Plan Details & Policies</strong></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
