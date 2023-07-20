import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import single_product_1 from '../../images/single_product_1.png';
import single_product_2 from '../../images/single_product_2.png';
import single_product_3 from '../../images/single_product_3.png';
import single_product_4 from '../../images/single_product_4.png';
import best_selling_icon from '../../images/best_selling_icon.png';
import best_selling1 from '../../images/best_selling1.png';
import best_selling2 from '../../images/best_selling2.png';
import best_selling3 from '../../images/best_selling3.png';
import i from '../../images/Ellipse 203.png'
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
            <section className='single_product'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-4'>
                            <div className='single_product_main'>
                                <div className='single_product_img'>
                                    <img src={single_product_1} alt="" />
                                </div>
                                <div className='single_product_img'>
                                    <img src={single_product_2} alt="" />
                                </div>
                                <div className='single_product_img'>
                                    <img src={single_product_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-10 col-8'>
                            <div className='single_product_img_main'>
                                <div className='single_product_img_main1'>
                                    <img src={single_product_4} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                {/* <div className='best_selling_product_icon'>
                                    <img src={best_selling_icon} alt='' />
                                </div> */}
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-12 col-12'>
                            <div className='single_product_txt_details'>
                                <h3 class="single_product_txt_main_dtl">Here the Single product <br></br> Name</h3>
                            </div>
                            <div className="single_product_review">
                                <div class="single_product_review_star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className="single_product_review_txt">(1.5K Reviews)</div>
                            </div>
                            <div className='single_product_rate_main'>
                                <div className='single_product_rate_txt1'>
                                    <h3>$ 100</h3>
                                </div>

                                <div className='single_product_rate_txt2'>
                                    <h3>$ 130</h3>
                                </div>

                            </div>
                            <div className='single_product_size'>
                                <h3 class="single_product_size">Size:</h3>
                                <div className='single_product_size_main'>
                                    <div className='single_product_size1'>
                                        <h5>M</h5>
                                    </div>
                                    <div className='single_product_size2'>
                                        <h5>L</h5>
                                    </div>
                                    <div className='single_product_size3'>
                                        <h5>XL</h5>
                                    </div>
                                    <div className='single_product_size4'>
                                        <h5>XXL</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='single_product_quantity_main'>
                                <h3 class="single_product_size">Quantity:</h3>
                            </div>
                            <div className='single_product_quantity'>
                                <div className="input-group-btn">
                                    <button className="btn btn-minus " >
                                        <i class="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control single_product_quantity_own" value="1"></input>
                                <div className="input-group-btn">
                                    <button className="btn btn-plus">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className='single_product_quantity_main'>
                                    <h3 class="single_product_size">Colour:</h3>
                                </div>
                                <div>
                                    <span className='Colorbox' style={{ backgroundColor: "#000000" }}></span>
                                    <span className='Colorbox' style={{ backgroundColor: "#0A6CFF" }}></span>
                                    <span className='Colorbox' style={{ backgroundColor: "#FF0000" }}></span>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <a href="#" className='cartBtn'>Add to Cart</a><a href="#" className='buyBtn'>Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='description-part'>
                        <h3 className='secHeading'>Product Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                        <ul>
                            <li>Donec nec justo eget felis facilisis fermentum.</li>
                            <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                            <li>Aliquam porttitor mauris sit amet orci.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                    </div>

                    <section className='shop_best_selling_prdt'>
                        <div className='container'>
                            <div className='best_selling_txt'>
                                <h2>Similar Products</h2>
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

                    <div className='reviewPart'>
                        <h3 className='secHeading'>Rating & Reviews</h3>
                        <h4 className='mt-2'>4.7 <span>out of</span> 5.00</h4>
                        <div className='mt-3'>
                            <div className='ratingBox'>
                                <span>5</span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span className='ratingBar'></span>
                            </div>
                            <div className='ratingBox'>
                                <span>4</span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span className='ratingBar' style={{ width: '30%' }}></span>
                            </div>
                            <div className='ratingBox'>
                                <span>3</span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span className='ratingBar' style={{ width: '20%' }}></span>
                            </div>
                            <div className='ratingBox'>
                                <span>2</span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span className='ratingBar' style={{ width: '10%' }}></span>
                            </div>
                            <div className='ratingBox'>
                                <span>1</span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span className='ratingBar' style={{ width: '5%' }}></span>
                            </div>
                        </div>
                    </div>

                    <div className='CustomerReview'>
                        <div className='box mt-5'>
                            <div className='CustImg'>
                                <img src={i} />
                            </div>
                            <div className='Content'>
                                <div>
                                    <h5>Aspen Calzoni</h5>
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star" style={{ color: "#CACACA" }}></i>
                                    </span>
                                </div>
                                <p className='mt-2'>Last month we designed Testerz.io web platform where Amazon sellers can get better reviews for their products. Sellers can post their products, people can order them for free, test them and add their reviews.
                                    We’ve been part of the project time.</p>
                                <h6>5 months ago</h6>
                                <div>
                                    <img src={single_product_1} />
                                    <img src={single_product_2} />
                                    <img src={single_product_3} />
                                </div>
                            </div>
                        </div>
                        <div className='box mt-5'>
                            <div className='CustImg'>
                                <img src={i} />
                            </div>
                            <div className='Content'>
                                <div>
                                    <h5>Aspen Calzoni</h5>
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star" style={{ color: "#CACACA" }}></i>
                                    </span>
                                </div>
                                <p className='mt-2'>Last month we designed Testerz.io web platform where Amazon sellers can get better reviews for their products. Sellers can post their products, people can order them for free, test them and add their reviews.
                                    We’ve been part of the project time.</p>
                                <h6>5 months ago</h6>
                                <div>
                                    <img src={single_product_1} />
                                    <img src={single_product_2} />
                                    <img src={single_product_3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='see_option'>
                        <a href="#" className='see_option_btn'>See more reviews</a>
                    </div>
                </div>
            </section>
        </>
    )
}