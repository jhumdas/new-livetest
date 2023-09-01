import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l from '../../images/location.png'
import sh1 from '../../images/hotel10.png'
import a from '../../images/hotel11.png'
import b from '../../images/hotel12.png'
import e from '../../images/hotel14.png'
import ac from '../../images/Frame 163263.png'
import ab from '../../images/Frame 163264.png'
import d1 from '../../images/dinner1 (1).png'
import af from '../../images/Frame 163268.png'
import ah from '../../images/Frame 163269.png'
import com from '../../images/com.png'
import t from '../../images/greentick.png'
import cc from '../../images/redcross.png'
import sm1 from '../../images/sm1.png'
import Pegination from '../../Component/Pagination'
export default function SingleBooking() {
    const loop = [1, 2, 3];
    const loop1 = [1, 2, 3];
    const loop2 = [1, 2, 3, 4, 5, 6];
    var settings = {
        dots: false,
        infinite: true,
        navs: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
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
                    <a href="#For_Hotel_rooms">Room</a>
                    <a href="#Amenities">Amenities</a>
                    <a href="#food-dining">Food & Dining</a>
                    <a href="#review_rating">Guest Review</a>
                    <a href="#property_policies">Policies</a>
                    <a href="#hotel_location">Location</a>
                    <a href="#">About</a>
                    <a href="#">QNA</a>
                    <a href="#similar_properties">Similar Properties</a>
                </div>
            </div>
            <div className='container' id="For_Hotel_rooms">
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
                                {loop.map((item, index) => {
                                    return (
                                        <div className='room_box_wrap' style={index == loop.length - 1 ? { border: "0" } : {}}>
                                            <h5>1 . Room Only | Free Cancellation</h5>
                                            <div className='room_box'>
                                                <div className='left'>
                                                    <h6>Risk Free Booking!</h6>
                                                    <h6>10 % Discount On F&B Services</h6>
                                                    <h6><strong>Free Cancellation till Check in</strong></h6>
                                                    <h6><strong>View Plan Details & Policies</strong></h6>
                                                </div>
                                                <div className='right'>
                                                    <h4>$ 0000</h4>
                                                    <h6>$ 0000</h6>
                                                    <h6>0 Room per Day</h6>
                                                    <Link to="/hotel-info" className='btnn'>Select Room</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Amenities' id='Amenities'>
                <div className='container'>
                    <h3 className='single_hotel_heading'>Amenities at Xyz hotel</h3>
                    <a className='btnnn mt-2'>POPULAR AMENITIES</a>
                    <div className='service'>
                        <h5>Free Internet</h5>
                        <h5>Air Coediting</h5>
                        <h5>Power Backup</h5>
                        <h5>Doctor On Call</h5>
                    </div>
                    <div className='options'>
                        <ul>
                            <h5>Dining</h5>
                            <li>Special Diet Meals</li>
                        </ul>
                        <ul>
                            <h5>Internet</h5>
                            <li>Free Wi- Fi</li>
                        </ul>
                        <ul>
                            <h5>Service</h5>
                            <li>Ticket/ Tour
                                Assistance</li>
                            <li>Business
                                Services</li>
                        </ul>
                        <ul>
                            <h5>General</h5>
                            <li>luggage Storage</li>
                            <li>Fine
                                Extinguishers</li>
                        </ul>
                        <ul>
                            <h5>Room</h5>
                            <li>Safety kit</li>
                            <li>Electronic Keycard</li>
                        </ul>
                        <ul>
                            <h5>Safety & Hygiene</h5>
                            <li>Dispensers For Disinfectants</li>

                        </ul>
                        <ul>
                            <h5>Others</h5>
                            <li>Cycling</li>
                            <li>Entertainment</li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className='food-dining' id='food-dining'>
                <div className='container'>
                    <h3 className='single_hotel_heading'>Food & Dining</h3>
                    <div className='d-flex align-items-center rating'>
                        <h6>Ambience
                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </h6>
                        <div className='v-line'></div>
                        <h6>Ambience
                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </h6>
                    </div>

                    <div className='foodBox'>
                        <h5><img src={ac} />Both Vegetarian & Non-Vegetarian food</h5>
                        <h5><img src={ac} />Both Vegetarian & Non-Vegetarian food</h5>
                    </div>
                    <div className='foodBox'>
                        <h5><img src={ab} />Both Vegetarian & Non-Vegetarian food</h5>
                        <h5><img src={ab} />Both Vegetarian & Non-Vegetarian food</h5>
                    </div>

                    <div className='menu'>
                        <h6>Menu & Dining</h6>
                        <div className='img-box'>
                            <img src={d1} />
                            <img src={d1} />
                            <img src={d1} />
                            <img src={d1} />
                        </div>
                    </div>
                    <div className='menu mt-3'>
                        <h6>Offers</h6>
                        <p className='mt-2'>Special dishes: Chicken Tikka sizzler, Kung Pao mushroom sizzler</p>
                    </div>
                </div>
            </div>

            <div className='property' id='property'>
                <div className='container'>
                    <h3 className='single_hotel_heading'>Property Rules</h3>
                    <span>For Food & Beverages</span>
                    <div className='foodBox'>
                        <div>
                            <h5><strong>Allowed</strong></h5>
                            <h5><img src={ac} />Both Vegetarian & Non-Vegetarian food</h5>
                            <h5><img src={af} />Both Vegetarian & Non-Vegetarian food</h5>
                            <h5><img src={ah} />Both Vegetarian & Non-Vegetarian food</h5>
                        </div>
                        <div>
                            <h5><strong>Not Allowed</strong></h5>
                            <h5><img src={ac} />Both Vegetarian & Non-Vegetarian food</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className='review_rating' id='review_rating'>
                <div className='container'>
                    <h3 className='single_hotel_heading'>Guest Reviews & Rating for xyz Hotel</h3>
                    <div className='box_Wrap'>
                        <div className='redBox'>
                            <h5>Rating</h5>
                            <h4>0.0/5</h4>
                            <div> <p>0000 Ratings</p>
                                <p>900 Reviews</p></div>
                        </div>
                        <div className='w-100'>
                            <div className='progress_barLine'>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "90%" }} />
                                </div>
                                <div className='point'>0000</div>

                            </div>
                            <div className='progress_barLine'>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "80%" }} />
                                </div>
                                <div className='point'>0000</div>

                            </div>
                            <div className='progress_barLine'>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "60%" }} />
                                </div>
                                <div className='point'>0000</div>

                            </div>
                            <div className='progress_barLine'>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "40%" }} />
                                </div>
                                <div className='point'>0000</div>

                            </div>
                            <div className='progress_barLine'>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "20%" }} />
                                </div>
                                <div className='point'>0000</div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='bg_pink'>
                <div className='container'>
                    <div className='customer_comments'>
                        {loop1.map((key, index) => {
                            return (
                                <div className='box'>
                                    <img src={com} />
                                    <div className='cnt'>
                                        <h5>María Fernanda Castro <span>20 hours ago</span></h5>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                    <Pegination />
                </div>
            </div>


            <div className='property_policies' id='property_policies'>
                <div className='container'>
                    <h3 className='single_hotel_heading'>Property Policies</h3>
                    <hr />
                    <div>
                        <h5><img src={t} />Unmarried couples are not allowed</h5>
                        <h5><img src={cc} />Guest below 00 year of age are not allowed at the prototype.</h5>
                        <h5><img src={t} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                        <h5><img src={t} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                    </div>
                    <a style={{ color: "#FF3A44", fontSize: "14px" }}>View all 00 property policies</a>
                </div>
            </div>

            <div className='container' id='hotel_location'>
                <div className='hotel_location'>
                    <h3 className='single_hotel_heading'>Property Policies</h3>
                    <div className='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58932.609445275135!2d88.35919891286824!3d22.605714715131008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027606dc300fb1%3A0x1e8c3008eba56670!2sSouth%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1693309731004!5m2!1sen!2sin"

                            height={300}
                            style={{ border: 0, width: "100%" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>

            <div className='bg_pink' id='similar_properties'>
                <div className='container'>
                    <h3 className='single_hotel_heading '>Similar Properties to Hotel Regent Grand</h3>
                    <div className='similar_properties'>
                        <Slider {...settings}>
                            {loop2.map((item, index) => {
                                return (
                                    <div className='box'>
                                        <div className='image'><img src={sm1} /></div>
                                        <div className='cont'>
                                            <div className='star'>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <h5>Hotel XYZ </h5>
                                            <span>location</span>
                                            <div className='review'>0.0/5 <span>000 review</span></div>
                                            <hr />
                                            <h4><img src={t} />Lorem Ipsum is simply </h4>
                                            <h4><img src={cc} />Lorem Ipsum is simply </h4>
                                            <hr />
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <h5>$ 0000 </h5>
                                                    <span>0 room per nignt</span>
                                                </div>
                                                <div>
                                                    <Link to="" className='btnnn' style={{ borderRadius: "5px" }}>Book now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            )}

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
