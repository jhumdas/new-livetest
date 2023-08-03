import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from '../../images/Rectangle 517.png';
import b from '../../images/Rectangle 521.png';
import c from '../../images/Rectangle 519.png';
import d from '../../images/Rectangle 522.png';
import e from '../../images/Rectangle 500.png';
import f from '../../images/Rectangle 498 (1).png';
import g from '../../images/Rectangle 502.png';



export default function Index() {
    const loop =[1,2,3];

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    var settings3 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [

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
                        Python
                    </button>
                    <button
                        className={toggleState === 3 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                        onClick={() => toggleTab(3)}
                    >
                        Excel
                    </button>
                    <button
                        className={toggleState === 4 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                        onClick={() => toggleTab(4)}
                    >
                        Web Development
                    </button>
                    <button
                        className={toggleState === 5 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                        onClick={() => toggleTab(5)}
                    >
                        Digital marketing
                    </button>
                    <button
                        className={toggleState === 6 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                        onClick={() => toggleTab(6)}
                    >
                        Java script
                    </button>
                    <button
                        className={toggleState === 7 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                        onClick={() => toggleTab(7)}
                    >
                        Data Science
                    </button>


                </div>
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div>
                        <div className='podcast-banner-slidewrap'>

                            <div className='podcast-banner-slide learning-home'>
                                <div className='box'>
                                    <div className='boxCnt'>
                                        <h3>Hack Your Future: Cyber Security Projects for Your Dream Job</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing eleifend nunc integer duis sed elit amet quam mauris. Sed ipsum massa ullamcorper et faucibus praesent.</p>
                                        <a href="#">View Course</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <section className='popular-course'>
                        <h2 className=''>Most Popular Course</h2>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='box'>
                                    <img src={a} />
                                    <div className='popCourse-boxCnt'>
                                        <h4>Designing Course</h4>
                                        <h5>Phillip Press</h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='box'>
                                    <img src={b} />
                                    <div className='popCourse-boxCnt'>
                                        <h4>Java Script</h4>
                                        <h5>Phillip Press</h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='box'>
                                    <img src={c} />
                                    <div className='popCourse-boxCnt'>
                                        <h4>Digital Marketing</h4>
                                        <h5>Phillip Press</h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='dream-job podcast-banner-slidewrap'>
                        <div className=''>

                            <Slider {...settings3}>
                                {loop.map(()=>{
                                    return(
                                        <div className=''>
                                        <div className='box'>
                                            <div className='imge'>
                                                <img src={d} />
                                            </div>
                                            <div className='popCourse-boxCnt'>
                                                <h4>Learn Ethical hacking for you Futuristic Dream job</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                                <h5><strong>By Angel Levin</strong></h5>
                                                <h5><strong style={{ display: "flex", alignItems: "center" }}>Update On 23 June  2022<span className='m-dot Lcourse'></span>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                                <h3>$500</h3>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }

                                )}
                             
                            </Slider>
                        </div>
                    </section>

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
