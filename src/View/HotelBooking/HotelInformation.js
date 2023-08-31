import React from 'react'
import a from '../../images/tajhotel.png'
import l from '../../images/location.png'
import u from '../../images/Union.png'
export default function HotelInformation() {
    return (
        <>

            <div className='hotel_info_bg'>
            </div>
            <div className='hotel_info_wrapper_cnt'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-8 col-md-8 col-12'>
                            <div className='Hotel_Information'>
                                <div id="accordionExample" className="accordion ">
                                    {/* Accordion item 1 */}
                                    <div className="card">
                                        <div
                                            id="headingOne"
                                            className="card-header bg-white"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                    className="btn btn-link collapsible-link"
                                                >
                                                    Hotel Information
                                                </button>
                                            </h2>
                                            {/* <div className='icon'></div> */}
                                        </div>
                                        <div
                                            id="collapseOne"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                            className="collapse show"
                                        >
                                            <div className="card-body">
                                                <div className='hotel_info Singlehotel_details'>
                                                    <div className='wrapper'>
                                                        <img src={a} />
                                                        <div>
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
                                                        </div>
                                                    </div>
                                                    <div className='pink_wraper'>
                                                        <div className='box'>
                                                            <h6>Check in</h6>
                                                            <h4>Thu, 24 Aug 2023</h4>
                                                            <h6>00:00 PM</h6>
                                                        </div>
                                                        <div className='box'>
                                                            <h6>Check Out</h6>
                                                            <h4>Thu, 25 Aug 2023</h4>
                                                            <h6>00:00 AM</h6>
                                                        </div>
                                                        <div className='box'>
                                                            <h6>Guest</h6>
                                                            <h4>2 Guests | 1 Room</h4>
                                                            <h6>1 Night</h6>
                                                        </div>
                                                    </div>
                                                    <div className='box'>
                                                        <div className='top'>
                                                            <h5>1 Room For @ Adults</h5>
                                                        </div>
                                                        <div className='bottom'>
                                                            <h4>1 X Deluxe Room with free breakfast and lunch/ Dinner</h4>
                                                            <div className='Border'><h6 className='mb-2'><img src={u} className='' style={{ marginRight: "4px" }} /><img src={u} className='mr-2' />2 Adults</h6>
                                                                <h6>Breakfast and lunch/ Dinner</h6></div>
                                                            <h6 className='mt-2'>View Booking & Cancellation Policy</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End */}
                                    {/* Accordion item 2 */}
                                    <div className="card">
                                        <div
                                            id="headingTwo"
                                            className="card-header bg-white "
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                    className="btn btn-link collapsible-link"
                                                >
                                                    GUEST DETAILS
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                            className="collapse"
                                        >
                                            <div className="card-body">
                                                <div className='guest-details'>
                                                    <div className='row'>
                                                        <div className='col-lg-2 col-md-2 col-12'>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleFormControlSelect1">Title</label>
                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>

                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className='col-lg-5 col-md-5 col-12'>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleFormControlSelect1">First Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter First Name" />

                                                            </div>

                                                        </div>
                                                        <div className='col-lg-5 col-md-5 col-12'>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleFormControlSelect1">Last Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Last Name" />

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Email Address (your booking voucher will be sent to email address)</label>
                                                            <input type="text" className="form-control" placeholder="Enter Email Address" />

                                                        </div>

                                                    </div>
                                                    <div className='mob-no'>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Mobile Number</label>
                                                            <div className='d-flex'>  <select className="form-control" id="exampleFormControlSelect1">
                                                                <option>+91 India</option>
                                                                <option>+91 India</option>
                                                                <option>+91 India</option>

                                                            </select>
                                                                <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                            </div>

                                                        </div>
                                                        <hr />
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                            <label className="form-check-label" htmlFor="gridCheck">
                                                                Enter GST Details <span>(Optional)</span>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End */}
                                    <div className='pin_state'>
                                        <h3>Your Pincode And State</h3>
                                        <span>(Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.)</span>
                                        <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <div className="form-group">

                                                    <input type="text" className="form-control" placeholder="Enter Billing Address" />

                                                </div>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <div className="form-group">

                                                    <input type="text" className="form-control" placeholder="Enter Pincode" />

                                                </div>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <div className="form-group state">
                                                    <label htmlFor="exampleFormControlSelect1">State</label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>West Bengal</option>
                                                        <option>West Bengal</option>
                                                        <option>West Bengal</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Confirm and save billing details to your profile
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className='btnn_red'>Proceed To Payment Options</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
