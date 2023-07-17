import React from 'react'
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import shop_facility3 from '../../images/shop_facility3.png';
import shop_facility1 from '../../images/shop_facility1.png';
import shop_facility2 from '../../images/shop_facility2.png';
import shop_facility4 from '../../images/shop_facility4.png';
import shop_bg1 from '../../images/shop_bg1.png';
import shop_categor1 from '../../images/shop_category1.png';
import shop_categor2 from '../../images/shop_category2.png';
import shop_categor3 from '../../images/shop_category3.png';
import shop_categor4 from '../../images/shop_category4.png';
import shop_categor5 from '../../images/shop_category5.png';
import shop_categor6 from '../../images/shop_category6.png';
import best_selling1 from '../../images/best_selling1.png';
import best_selling2 from '../../images/best_selling2.png';
import best_selling3 from '../../images/best_selling3.png';
import best_selling_icon from '../../images/best_selling_icon.png';
import shop_pageadd from '../../images/shop_pageadd.png';
import best_selling4 from '../../images/best_selling4.png';
import best_selling5 from '../../images/best_selling5.png';
import best_selling6 from '../../images/best_selling6.png';
import best_selling7 from '../../images/best_selling7.png';
import best_selling8 from '../../images/best_selling8.png';
import best_selling9 from '../../images/best_selling9.png';
import best_selling11 from '../../images/best_selling11.png';
import best_selling12 from '../../images/best_selling12.png';
import best_selling13 from '../../images/best_selling13.png';

import { useState } from 'react';


export default function Index() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        navs: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
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
    var settings1 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

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
            <section className='shop_page_product_search'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-xl-1 col-lg-1 col-md-6 col-6 ordr1">
                            <a className='nav_icon_search'>
                                <i class="fa-solid fa-bars"></i>
                            </a>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-12 ordr2">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search for products"></input>
                                </div>

                            </form>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-6 ordr3">
                            <div className='from_icon_whish_cart_main'>
                                <div className='from_icon_whish_cart1'>
                                    <Link to="">
                                        <img src={icon1} alt='' />
                                    </Link>
                                </div>
                                <div className='from_icon_whish_cart1'>
                                    <Link to="">
                                        <img src={icon2} alt='' />
                                    </Link>
                                </div>
                                <div className='from_icon_whish_cart1'>
                                    <Link to="">
                                        <img src={icon3} alt='' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='shop_bg'>
                <div className='container'>

                    <Slider {...settings}>
                        <div className='shop_bg_img_txt'>
                            <div className='shop_bg_img_txt_main'>
                                <div className='shop_bg_txt_main'>
                                    <p className='shop_bg_txt_main1'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className='shop_bg_txt_main2'>Lorem ipsum dolor sit amet consectetur. Cras tristique eros placerat mi volutpat neque.</p>
                                    <a href="#" className='shop_bg_btn'>SHOP NOW</a>
                                </div>
                                <div className='shop_bg_img_main'>

                                    <img src={shop_bg1} alt='' />

                                </div>
                            </div>
                        </div>
                        <div className='shop_bg_img_txt'>
                            <div className='shop_bg_img_txt_main'>
                                <div className='shop_bg_txt_main'>
                                    <p className='shop_bg_txt_main1'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className='shop_bg_txt_main2'>Lorem ipsum dolor sit amet consectetur. Cras tristique eros placerat mi volutpat neque.</p>
                                    <a href="#" className='shop_bg_btn'>SHOP NOW</a>
                                </div>
                                <div className='shop_bg_img_main'>
                                    <img src={shop_bg1} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='shop_bg_img_txt'>
                            <div className='shop_bg_img_txt_main'>
                                <div className='shop_bg_txt_main'>
                                    <p className='shop_bg_txt_main1'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className='shop_bg_txt_main2'>Lorem ipsum dolor sit amet consectetur. Cras tristique eros placerat mi volutpat neque.</p>
                                    <a href="#" className='shop_bg_btn'>SHOP NOW</a>
                                </div>
                                <div className='shop_bg_img_main'>
                                    <img src={shop_bg1} alt='' />
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>
            </section>

            <section className='shop_facility'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-6'>
                            <div className='shop_facility_icon'>
                                <div className='shop_facility_icon_img'>
                                    <img src={shop_facility3} alt='' />
                                </div>
                                <h4 className='shop_facility_text'>
                                    Easy Return <span className='shop_facility_spn'> Policy </span>
                                </h4>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-6'>
                            <div className='shop_facility_icon'>
                                <div className='shop_facility_icon_img'>
                                    <img src={shop_facility1} alt='' />
                                </div>
                                <h4 className='shop_facility_text'>
                                    500K Products <span className='shop_facility_spn'>Sales</span>
                                </h4>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-6'>
                            <div className='shop_facility_icon'>
                                <div className='shop_facility_icon_img'>
                                    <img src={shop_facility4} alt='' />
                                </div>
                                <h4 className='shop_facility_text'>
                                    5 Million people
                                    <span className='shop_facility_spn'> Are Buy</span>
                                </h4>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-6'>
                            <div className='shop_facility_icon'>
                                <div className='shop_facility_icon_img'>
                                    <img src={shop_facility2} alt='' />
                                </div>
                                <h4 className='shop_facility_text'>
                                    We Delivered <span className='shop_facility_spn'>globally</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='shop_details_category'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>
                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor1} alt='' />
                                </div>
                                <div className='shop_details_category_txt'>
                                    <h5>Fashion</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>
                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor2} alt='' />
                                </div>

                                <div className='shop_details_category_txt'>
                                    <h5>Electronics</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>

                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor3} alt='' />
                                </div>
                                <div className='shop_details_category_txt'>
                                    <h5>Shoes</h5>
                                </div>
                            </div>

                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>

                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor4} alt='' />
                                </div>
                                <div className='shop_details_category_txt'>
                                    <h5>Furniture</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>

                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor5} alt='' />
                                </div>
                                <div className='shop_details_category_txt'>
                                    <h5>Stationary</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='shop_details_category_main_img_txt'>

                                <div className='shop_details_category_main_img'>
                                    <img src={shop_categor6} alt='' />
                                </div>
                                <div className='shop_details_category_txt'>
                                    <h5>Appliances</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='shop_details_vdo'>
                <div className='shop_detailsadd'>
                    <img src={shop_pageadd} alt='' />
                </div>
            </section>


            <section className='shop_best_selling_prdt'>
                <div className='container'>
                    <div className='best_selling_txt'>
                        <h2>BEST SELLING PRODUCT</h2>
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
            <section className='shop_u_choice'>
                <div className='container'>
                    <div className='shop_choice_txt'>
                        <h2>SHOP YOU CHOICE</h2>
                    </div>
                    <div className='shop_choice_list'>
                        <button
                            className={toggleState === 1 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(1)}
                        >
                            ALL
                        </button>
                        <button
                            className={toggleState === 2 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(2)}
                        >
                            HOODIES
                        </button>
                        <button
                            className={toggleState === 3 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(3)}
                        >
                            SWEAT SHIRTS
                        </button>
                        <button
                            className={toggleState === 4 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(4)}
                        >
                            PANTS
                        </button>
                        <button
                            className={toggleState === 5 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(5)}
                        >
                            T- SHIRTS
                        </button>
                        <button
                            className={toggleState === 6 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(6)}
                        >
                            SHOE
                        </button>
                        <button
                            className={toggleState === 7 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(7)}
                        >
                            JACKETS
                        </button>
                        <button
                            className={toggleState === 8 ? "shop_tab active_shop_tab" : "shop_tab"}
                            onClick={() => toggleTab(8)}
                        >
                            OTHERS
                        </button>
                    </div>
                    <div
                            className={toggleState === 1 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 2 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 3 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 4 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 5 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 6 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 6 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 7 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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

                    </div>
                    <div
                            className={toggleState === 8 ? "content  active-content row" : "content" }
                        >
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling5} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling4} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling7} alt='/'></img>
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

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                            <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling6} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling9} alt='/'></img>
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
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                        <div className='best_selling_shop'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling8} alt='/'></img>
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

                    </div>
                </div>

            </section>

            <section className='shop_dnm_collection'>
                <div className='container'>
                    <div className='shop_dnm_bg'>

                    </div>
                </div>
            </section>
            <section className='shop_best_selling_prdt_ftw'>
                <div className='container'>
                    <div className='best_selling_txt'>
                        <h2>Footwear</h2>
                    </div>
                    <Slider {...settings1}>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling11} alt='/'></img>
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
                                    <img src={best_selling12} alt='/'></img>
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
                                    <img src={best_selling13} alt='/'></img>
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


            <section className='shop_best_selling_prdt_wmn_fsh'>
                <div className='container'>
                    <div className='best_selling_txt'>
                        <h2>Women fashion</h2>
                    </div>
                    <Slider {...settings1}>
                        <div className='best_selling_product'>
                            <div className='best_selling_product_bg_img_txt'>
                                <div className='best_selling_product_bg'>
                                    <img src={best_selling11} alt='/'></img>
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
                                    <img src={best_selling12} alt='/'></img>
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
                                    <img src={best_selling13} alt='/'></img>
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
                    <div className='see_option'>
                        <a href="#" className='see_option_btn'>See more Sections</a>
                    </div>
                </div>
            </section>

        </>
    )
}