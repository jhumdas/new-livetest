import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../../images/donate1.png"
import b from '../../images/Vector 6.png'
import bbb from '../../images/pppp.png'
import c from '../../images/poorboy.png';
import d from '../../images/Rectangle 522.png';
import e from '../../images/dn3.png';
import f from '../../images/d98.png';
import g from '../../images/d23.png';
import bannerimage from '../../images/New Project (1).png'
export default function Index() {
    const loop = [1, 2, 3];

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    var settings3 = {
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
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
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
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
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
                <div className='container'>
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
                            wildlife
                        </button>
                        <button
                            className={toggleState === 3 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                            onClick={() => toggleTab(3)}
                        >
                            education
                        </button>
                        <button
                            className={toggleState === 4 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                            onClick={() => toggleTab(4)}
                        >
                            medical
                        </button>
                        <button
                            className={toggleState === 5 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                            onClick={() => toggleTab(5)}
                        >
                            food & hunger
                        </button>
                        <button
                            className={toggleState === 6 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                            onClick={() => toggleTab(6)}
                        >
                            environment
                        </button>



                    </div>
                </div>
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div>
                        <div className='container'>
                            <div className='podcast-banner-slidewrap'>

                                <div className='podcast-banner-slide learning-home donation-home'>
                                    <div className='box'>
                                        <div className='boxCnt'>
                                            <h3>alone we can do so little. together we can do so much.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing eleifend nunc integer duis sed elit amet quam mauris. Sed ipsum massa ullamcorper et faucibus praesent.</p>
                                            <a href="#">Donate</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='container'>
                            <div className='success-stories'>
                                <div className='top'>
                                    <h3>success stories</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                                <div className='slider podcast-banner-slidewrap'>
                                    <Slider {...settings3}>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                        <div>
                                            <div className='imgg'>
                                                <img src={bbb} />
                                                <div className='cnt'>
                                                    you all are our heroes! your donations and prayers saved my dad’s life
                                                </div>
                                            </div>
                                            <p className='mt-2'>lorem</p>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <section className='zigzag FirstStep' style={{ backgroundImage: `url('${b}')`, position: 'relative' }}>
                            <div className='cust-container'>
                                <div className='row' style={{ alignItems: "center" }}>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className='left'>
                                            <img src={a} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className='right'>
                                            <h3> Donate the needy people in a good way a medical way
                                            </h3>
                                            <ul>
                                                <li>
                                                    {/* Increase on-site conversions with social galleries */}

                                                    <span>Bushido helps businesses to showcase, market and sell their products and services, users can donate to sustainable projects or cash out their commissions and earnings.
                                                    </span>
                                                </li>

                                                <a href="#" className='exploreBtn'>Explore</a>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='zigzag LastStep'>
                            <div className='cust-container'>
                                <div className='row' style={{ alignItems: "center" }}>
                                    <div className='col-lg-6 col-md-6 col-12 orderTwo'>
                                        <div className='right'>
                                            <h3>Donate your old cloths to the children in help</h3>
                                            <ul>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <a href="#" className='exploreBtn'>Explore</a>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12 orderOne'>
                                        <div className='left'>
                                            <img src={g} />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        <section className='zigzag'>
                            <div className='cust-container'>
                                <div className='row' style={{ alignItems: "center" }}>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className='left'>
                                            <img src={f} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className='right'>
                                            <h3>Wildlife is important com and join our campaign and donate for the animals</h3>
                                            <ul>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy
                                                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                                </li>
                                                <a href="#" className='exploreBtn'>Explore</a>
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <div className='highlight'>
                            <div className='container'>
                                <h2>highlights for today</h2>
                                <div className='slider shop_best_selling_prdt selectsong-slider' style={{paddingTop:"0"}}>
                                    <Slider {...settings}>
                                        <div className='box'>
                                            <div style={{position:"relative"}}>
                                                <img src={c} />
                                                <div className='img-cnt'>5 days left</div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua </p>
                                                <h6>$ 9,80,765 raised</h6>
                                                <h6 style={{ color: "#25333a" }}>last donation 3 hr ago</h6>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div style={{position:"relative"}}>
                                                <img src={c} />
                                                <div className='img-cnt'>5 days left</div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua </p>
                                                <h6>$ 9,80,765 raised</h6>
                                                <h6 style={{ color: "#25333a" }}>last donation 3 hr ago</h6>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div style={{position:"relative"}}>
                                                <img src={c} />
                                                <div className='img-cnt'>5 days left</div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua </p>
                                                <h6>$ 9,80,765 raised</h6>
                                                <h6 style={{ color: "#25333a" }}>last donation 3 hr ago</h6>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div style={{position:"relative"}}>
                                                <img src={c} />
                                                <div className='img-cnt'>5 days left</div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua </p>
                                                <h6>$ 9,80,765 raised</h6>
                                                <h6 style={{ color: "#25333a" }}>last donation 3 hr ago</h6>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <section className='zigzag bigger' style={{ backgroundImage: `url('${bannerimage}')`, position: 'relative' }}>
                            <div className='cust-container'>
                                <div className='row' style={{ alignItems: "center" }}>

                                    <div className='col-lg-6 col-md-6 col-12 orderTwo'>
                                        <div className='right'>
                                            <h3>provide education to the needy children by your donation and charity</h3>
                                            <ul>
                                                <li>
                                                    <span>Investing in Transformative Change through Community, Social & Impact Investment. </span>


                                                </li>
                                                <li>
                                                    <span> Community – use our platform to create online virtual communities and talks / showcases

                                                    </span>
                                                </li>
                                                <li>
                                                    <span> Create new social and impact investing initiatives

                                                    </span>
                                                </li>
                                                <li><span>
                                                    Be part of the one of the biggest personal and business growth platforms which rewards you for making a difference


                                                </span>
                                                </li>
                                                <a href="#" className='exploreBtn'>Explore</a>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12 orderOne'>
                                        <div className='left'>
                                            <img src={e} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='container'>
                            <div className='podcast-banner-slidewrap'>

                                <div className='podcast-banner-slide learning-home alone-home' >
                                    <div className='box'>
                                        <div className='boxCnt'>
                                            <h3>alone we can do so little. together we can do so much.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing eleifend nunc integer duis sed elit amet quam mauris. Sed ipsum massa ullamcorper et faucibus praesent.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
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
