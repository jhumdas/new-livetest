import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SongSearch from '../../Component/SongSearch'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h from '../../images/Rectangle 443.png'
import d from '../../images/bi_download.png'
import best_selling1 from '../../images/p1 (4).png';
import best_selling2 from '../../images/p1 (3).png';
import best_selling3 from '../../images/p1 (2).png';
import best_selling_icon from '../../images/best_selling_icon.png';
export default function Index() {
    const loop = [1, 2, 3, 4, 5];
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    var settings1 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
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
    var settings2 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
    var settings3 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.9,
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
         
                    <div className='mt-4 mb-4'>
                        <div className=' podcastTab'>
                            <button
                                className={toggleState === 1 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(1)}
                            >
                                All
                            </button>


                            <button
                                className={toggleState === 2 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(2)}
                            >
                                Comedy
                            </button>
                            <button
                                className={toggleState === 3 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(3)}
                            >
                                Horror
                            </button>
                            <button
                                className={toggleState === 4 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(4)}
                            >
                                Motivational
                            </button>
                            <button
                                className={toggleState === 5 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(5)}
                            >
                                Spiritual
                            </button>
                            <button
                                className={toggleState === 6 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(6)}
                            >
                                Devotional
                            </button>
                            <button
                                className={toggleState === 7 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(7)}
                            >
                                Romantic
                            </button>
                            <button
                                className={toggleState === 8 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(8)}
                            >
                                Animal & Wildlife
                            </button>

                        </div>
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div>
                                <div className='podcast-banner-slidewrap'>
                                    <Slider {...settings1}>
                                        {loop.map((item, index) => {
                                            return (
                                                <div className='podcast-banner-slide'>
                                                    <div className='box'>
                                                        <div className='boxCnt'>
                                                            <h3>Haunted Podcast</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Nulla interdum dictum faucibus nullam nibh fringilla amet at.</p>
                                                            <a href="#">Listen now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        )}


                                    </Slider>
                                </div>
                                <div className='podcast-banner-slidewrap recent-played-slidewrap'>
                                    <div className='best_selling_txt'>
                                        <h2>Recently Played </h2>
                                    </div>
                                    <Slider {...settings2}>
                                        {loop.map((item, index) => {
                                            return (
                                                <div className='recent-played-slide'>
                                                    <div className='episode'>
                                                        <div className='img-part'>
                                                            <img src={h} />

                                                        </div>
                                                        <div className='cnt'>
                                                            <div className=''>
                                                                <h5>Lorem ipsum dolor sit </h5>
                                                                <div className='Movietype'><span>Lorem ipsum dolor sit amet consectetur.</span></div>
                                                            </div>
                                                            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className='episode pt-3'>
                                                        <div className='img-part'>
                                                            <img src={h} />

                                                        </div>
                                                        <div className='cnt'>
                                                            <div className=''>
                                                                <h5>Lorem ipsum dolor sit </h5>
                                                                <div className='Movietype'><span>Lorem ipsum dolor sit amet consectetur.</span></div>
                                                            </div>
                                                            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        )}


                                    </Slider>
                                </div>
                                <section className='shop_best_selling_prdt selectsong-slider'>
                                    <div className=''>
                                        <div className='best_selling_txt'>
                                            <h2>Featured Today</h2>
                                        </div>
                                        <Slider {...settings3}>
                                            <div className='best_selling_product'>
                                               <Link to="/selectpodcast-detail"> <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                            Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div></Link>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </section>
                                <section className='shop_best_selling_prdt selectsong-slider'>
                                    <div className=''>
                                        <div className='best_selling_txt'>
                                            <h2>New Released</h2>
                                        </div>
                                        <Slider {...settings3}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </section>
                                <section className='shop_best_selling_prdt selectsong-slider'>
                                    <div className=''>
                                        <div className='best_selling_txt'>
                                            <h2>Top Search podcast</h2>
                                        </div>
                                        <Slider {...settings3}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </section>
                                <section className='shop_best_selling_prdt selectsong-slider'>
                                    <div className=''>
                                        <div className='best_selling_txt'>
                                            <h2>Top Motivation Podcast</h2>
                                        </div>
                                        <Slider {...settings3}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </section>
                                <section className='shop_best_selling_prdt selectsong-slider'>
                                    <div className=''>
                                        <div className='best_selling_txt'>
                                            <h2>Best of Horror Podcast</h2>
                                        </div>
                                        <Slider {...settings3}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>

                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1' style={{ paddingBottom: "0", fontSize: "16px" }}>
                                                        Podcast Name
                                                        </h4>
                                                        <p className='' style={{ fontSize: "12px" }}>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </section>
                                <div className='see_option'>
                                    <a href="#" className='see_option_btn'>Load more</a>
                                </div>
                            </div>

                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 4 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 5 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 6 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 7 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                        <div
                            className={toggleState === 8 ? "content  active-content" : "content"}
                        >


                            <div></div>
                        </div>
                    </div>
            

        </>
    )
}
