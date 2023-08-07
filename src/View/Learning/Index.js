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
import icon3 from '../../images/cart.png';


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
        slidesToShow: 1,
        slidesToScroll: 1,

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
                        <h2 className='popular-headline'>Most Popular Course</h2>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-12'>
                               <Link to="/single-course"> <div className='box'>
                                    <img src={a} />
                                    <div className='popCourse-boxCnt'>
                                        <h4>Designing Course</h4>
                                        <h5>Phillip Press</h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)20,000 students</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div></Link>
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
                                {loop.map(() => {
                                    return (
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

                    <div className='popular-topic'>
                        <h2 className='popular-headline'>Popular Topics</h2>
                        <div className='topicBtn'>
                            <div className='btn'><a>Ethical hacking</a></div>
                            <div className='btn'><a>Chat GPT</a></div>
                            <div className='btn'><a>Python</a></div>
                            <div className='btn'><a>UI/UX</a></div>
                            <div className='btn'><a>DevOps</a></div>


                        </div>
                        <div className='topicBtn'>
                            <div className='btn'><a>Ethical hacking</a></div>
                            <div className='btn'><a>Chat GPT</a></div>
                            <div className='btn'><a>Python</a></div>
                            <div className='btn'><a>UI/UX</a></div>
                            <div className='btn'><a>DevOps</a></div>

                        </div>
                    </div>

                    <div className='all_course category'>
                        <h2 className='popular-headline'>All Courses</h2>
                        <div className='row'>
                            <div className='col-lg-3 col-md-5 col-12'>
                                <div className='sidewrap'>

                                    <div className='pop-select'>
                                        <span>Short by :</span>
                                        <select multiple="" className="form-control" id="exampleFormControlSelect2">
                                            <option>Most Popular</option>
                                            <option>Most Popular2</option>
                                            <option>Most Popular3</option>
                                          
                                        </select>

                                    </div>
                                    <div id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingFive">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyFive"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyFive"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Rating</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyFive"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingFive"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <input
                                                                        name="language[]"
                                                                        id="allLanguage"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="all"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="allLanguage">
                                                                        5.0
                                                                    </label>
                                                                </div>
                                                                <div> <span className='star'>
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span></div>
                                                                <div><span>(12,000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        4.5
                                                                    </label>
                                                                </div>
                                                                <div> <span className='star'>
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span></div>
                                                                <div><span>(10,000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="Bengali"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="Bengali"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="Bengali">
                                                                        4.0
                                                                    </label>
                                                                </div>
                                                                <div> <span className='star'>
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span></div>
                                                                <div><span>(8,000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />


                                                                    <label className="form-check-label" htmlFor="English">
                                                                        3.5
                                                                    </label>
                                                                </div>
                                                                <div> <span className='star'>
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span></div>
                                                                <div>
                                                                    <span>(6,000)</span></div>
                                                            </div>

                                                            <span className='more-disc'>Show more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingFour">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyFour"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyFour"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Video Deration</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyFour"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingFour"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <input
                                                                        name="language[]"
                                                                        id="allLanguage"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="all"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="allLanguage">
                                                                        0 - 30 hours
                                                                    </label>
                                                                </div>
                                                                <div><span>(2500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        0 - 50 hours
                                                                    </label>
                                                                </div>
                                                                <div><span>(2000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="Bengali"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="Bengali"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="Bengali">
                                                                        0 - 60 hours
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        0 - 70 hours
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>

                                                            <span className='more-disc'>Show more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingThree">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyThree"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyThree"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Topics </h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyThree"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingThree"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <input
                                                                        name="language[]"
                                                                        id="allLanguage"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="all"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="allLanguage">
                                                                        Java Script
                                                                    </label>
                                                                </div>
                                                                <div><span>(2500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        Python
                                                                    </label>
                                                                </div>
                                                                <div><span>(2000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="Bengali"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="Bengali"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="Bengali">
                                                                        Web Development
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        Excel
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>

                                                            <span className='more-disc'>Show more</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingOne">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyOne"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyOne"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Lavel</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyOne"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingOne"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <input
                                                                        name="language[]"
                                                                        id="allLanguage"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="all"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="allLanguage">
                                                                        Beginner
                                                                    </label>
                                                                </div>
                                                                <div><span>(2500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        All levels
                                                                    </label>
                                                                </div>
                                                                <div><span>(2000)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="Bengali"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="Bengali"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="Bengali">
                                                                        Intermediate
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <div>
                                                                    <input
                                                                        name="language[]"
                                                                        id="English"
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue="English"
                                                                        onclick="ifAllSelected()"
                                                                    />
                                                                    <label className="form-check-label" htmlFor="English">
                                                                        Expert
                                                                    </label>
                                                                </div>
                                                                <div><span>(3500)</span></div>
                                                            </div>

                                                            <span className='more-disc'>Show more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingSix">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodySix"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodySix"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Price</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodySix"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingSix"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    $100
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    $300
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    $500
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    $800
                                                                </label>
                                                            </div>

                                                            <span className='more-disc'>Show more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingTwo">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyTwo"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyTwo"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>language</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyTwo"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingTwo"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >

                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className='col-lg-9 col-md-7 col-12'>
                                <div className='dream-job course'>
                                    <div className='box'>
                                        <div className='imge'>
                                            <img src={d} />
                                        </div>
                                        <div className='popCourse-boxCnt'>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                                <div className="from_icon_whish_cart1">
                                                    <a href="/ott-download">
                                                        <img
                                                            src={icon3}
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                            <h5><strong>By Angel Levin</strong></h5>
                                            <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                            <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                            <h3>$500</h3>
                                        </div>
                                    </div>
                                    <div className='box mt-3'>
                                        <div className='imge'>
                                            <img src={d} />
                                        </div>
                                        <div className='popCourse-boxCnt'>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                                <div className="from_icon_whish_cart1">
                                                    <a href="/ott-download">
                                                        <img
                                                            src={icon3}
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                            <h5><strong>By Angel Levin</strong></h5>
                                            <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                            <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                            <h3>$500</h3>
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
