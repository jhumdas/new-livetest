import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import news_sld1 from "../../images/news_sld1.png";
import lcl_news_1 from "../../images/lcl_news_1.png";
import lcl_news_2 from "../../images/lcl_news_2.png";
import lcl_news_3 from "../../images/lcl_news_3.png";
import lcl_news_4 from "../../images/lcl_news_4.png";
import lcl_news_5 from "../../images/lcl_news_5.png";
import lcl_news_6 from "../../images/lcl_news_6.png";
import lcl_news_7 from "../../images/lcl_news_7.png";
import lcl_news_8 from "../../images/lcl_news_8.png";
import lcl_news_9 from "../../images/lcl_news_9.png";
import lcl_news_10 from "../../images/lcl_news_10.png";
import { Link } from 'react-router-dom';

export default function Index() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    var settings = {
        dots: false,
        arrows: true,
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


    return (

        <>

            <section className='today_news'>
                <div className='container'>
                    <div className='tdnews'>
                        <h5>Today News</h5>
                        <h6>Wednesday, 27th May 2021</h6>
                    </div>
                    <Slider {...settings}>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed <br></br> turpis nullam accumsan diam. Viverra erat  <br></br> enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor <br></br> consectetur cras elementum ut aliquet proin neque <br></br> mauris. Gravida est tortor natoque egestas amet<br></br> tempor. Suscipit dui hac diam est sit</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor consectetur cras elementum ut aliquet proin neque mauris. Gravida est tortor natoque egestas amet tempor. Suscipit dui hac diam est sit Read More</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor consectetur cras elementum ut aliquet proin neque mauris. Gravida est tortor natoque egestas amet tempor. Suscipit dui hac diam est sit Read More</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor consectetur cras elementum ut aliquet proin neque mauris. Gravida est tortor natoque egestas amet tempor. Suscipit dui hac diam est sit Read More</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor consectetur cras elementum ut aliquet proin neque mauris. Gravida est tortor natoque egestas amet tempor. Suscipit dui hac diam est sit Read More</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                        <div className='tdn_news_sld'>
                            <div className='tds_news_sld_img'>
                                <img src={news_sld1} alt="" />
                            </div>
                            <div className='tds_news_sld_txt'>
                                <p className='tds_news_sld_txt1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='tds_news_sld_txt2'>Lorem ipsum dolor sit amet consectetur. Auctor consectetur cras elementum ut aliquet proin neque mauris. Gravida est tortor natoque egestas amet tempor. Suscipit dui hac diam est sit Read More</p>
                                <h5 className='tds_news_sld_txt_tdh'>Wednesday, 27th May 2021</h5>
                            </div>

                        </div>
                    </Slider>
                </div>
            </section>

            <section className='news_local_news'>
                <div className='container'>
                    <div className='news_local_txt'>
                        <h4>Local News</h4>
                    </div>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            <Link to="/newsdetails">
                            <div className='news_local_img_txt1'>
                                <div className='news_local_img1'>
                                    <img src={lcl_news_1} alt='' />
                                </div>
                                <div className='news_local_txt_main'>
                                    <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                    <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                </div>
                            </div>
                            </Link>
                            <div className='news_local_img_txt1'>
                                <div className='news_local_img1'>
                                    <img src={lcl_news_2} alt='' />
                                </div>
                                <div className='news_local_txt_main'>
                                    <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                    <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            <div className='news_local_img_txt1'>
                                <div className='news_local_img1'>
                                    <img src={lcl_news_3} alt='' />
                                </div>
                                <div className='news_local_txt_main'>
                                    <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                    <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                </div>
                            </div>
                            <div className='news_local_img_txt1'>
                                <div className='news_local_img1'>
                                    <img src={lcl_news_4} alt='' />
                                </div>
                                <div className='news_local_txt_main'>
                                    <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                    <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='news_chnl'>
                <div className='container'>
                    <div className='news_chnl_list'>
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            World
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            National
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            Business
                        </button>
                        <button
                            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                        >
                            Entertainment
                        </button>
                        <button
                            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(5)}
                        >
                            Sports
                        </button>
                        <button
                            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(6)}
                        >
                            Technology
                        </button>
                        <button
                            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(7)}
                        >
                            Health
                        </button>
                        <button
                            className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(8)}
                        >
                            Science
                        </button>
                    </div>

                    <div className='row'>
                        
                            <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_5} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_6} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_7} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_8} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_9} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_local_img_txt1'>
                                    <div className='news_local_img1'>
                                        <img src={lcl_news_10} alt='' />
                                    </div>
                                    <div className='news_local_txt_main'>
                                        <p className='news_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section >


        </>
    )
}

