import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import business_img_profile from '../../images/business_img_profile.png';
import { Link } from 'react-router-dom';
import arrow_left from "../../images/arrow_left.png";
import arrow_right from "../../images/arrow_right.png";
import Companies_img1 from "../../images/Companies_img1.png";
import Companies_img2 from "../../images/Companies_img2.png";
import Companies_img3 from "../../images/Companies_img3.png";
import Companies_img4 from "../../images/Companies_img4.png";
import Companies_img5 from "../../images/Companies_img5.png";
import Companies_img6 from "../../images/Companies_img6.png";
import Companies_img7 from "../../images/Companies_img7.png";
import Companies_img8 from "../../images/Companies_img8.png";
import business_graph1 from "../../images/business_graph1.png";
import business_graph from "../../images/business_graph.png"
import system_uicons_cross from "../../images/system_uicons_cross.png"
export default function Watchlist() {
    const loop = [1, 2, 3, 4, 5];
    const [toggleState, setToggleState] = useState(1);
    const [mediumlist, setMediumlist] = useState(true);
    const [explore, setExplore] = useState(true);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const handleClick = () => {
        setMediumlist(!mediumlist);
    }
    const handleClickexplore = () => {
        alert("yes")
    }
    var settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3.9,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
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
            <section className='business_home'>
                <div className='mt-4 mb-4'>
                    <div className='podcast_explr'>
                        <div className='podcastTab podcastTab_explr_btn'>
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
                                F&O
                            </button>
                            <button
                                className={toggleState === 3 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(3)}
                            >
                                Intraday
                            </button>
                            <button
                                className={toggleState === 4 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(4)}
                            >
                                All stocks
                            </button>
                            <button
                                className={toggleState === 5 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                                onClick={() => toggleTab(5)}
                            >
                                IPO
                            </button>
                        </div>
                        <div className='business_explr'>
                            <a href="#" className='business-explr_btn' Onclick={() => handleClickexplore(setExplore)}>
                                EXPLORE
                                <i class="fa-solid fa-angle-down"></i>
                            </a>
                            <ul className='exploreul'>
                                <li className='exploreli'>
                                    <Link to="/watchlist" className='exploreali'>My watchlist</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <div className='business_investment_return mt-4 mb-4'>
                            <div className='business_investment_return_main'>
                                <div className='business_investment'>
                                    <h5 className='business_investment_amnt'>$229,757.98</h5>
                                    <p className='business_investment_total'>Total Investment</p>
                                </div>
                                <div className='business_return'>
                                    <h5 className='business_investment_amnt'>$29,757</h5>
                                    <p className='business_investment_total'>Total Return</p>
                                </div>
                            </div>
                        </div>

                        <div className='business_invest_ftse mt-4 mb-4'>
                            <Slider {...settings1}>
                                {loop.map((item, index) => {
                                    return (
                                        <div className='business_invest_ftse_slide'>
                                            <div className='business_invst_crd'>
                                                <div className='business_invst_crd_ftse'>
                                                    <h5 className='business_invst_crd_ftse_hhh'>
                                                        FTSE 100
                                                    </h5>
                                                </div>
                                                <div className='business_invst_crd_ftse_amnt'>
                                                    <p className='business_invst_crd_ftse_amnt_ppp'>13,675,97</p>
                                                    <p className='business_invst_crd_ftse_amnt_ppp_percent'>+99.67(0.78%)</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                )}
                            </Slider>
                        </div>

                        <div className='business_watchlist_edit mt-4 mb-4'>
                            <div className='watchlist_edit'>
                                <button className='edit_watch'>Edit</button>
                            </div>
                        </div>

                        <div className='business_company_list mt-4'>
                            <div className='companies_rcntly mb-4'>
                                <div className='comapnises_nmbr'>
                                    <p>10 companies</p>
                                </div>
                                <div className='recnt'>
                                    <a href="#" className='left_chevron'>
                                        <img src={arrow_left} alt="/" />
                                    </a>
                                    <p className='recntly'>
                                        Recently
                                    </p>
                                    <a href="#" className='right_chevron'>
                                        <img src={arrow_right} alt="/" />
                                    </a>
                                </div>
                            </div>
                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img1} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph1} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img2} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img3} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph1} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img4} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph1} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img5} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                    <Link to="/stockpage">
                                        <div className='business_company_img_txt'>
                                            <div className='business_company_img'>
                                                <img src={Companies_img6} alt="/" />
                                            </div>
                                            <div className='company_lrm_name_stck'>
                                                <p className='company_lrm'>lorem ipsum</p>
                                                <p className='company_stck'>Stock</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                <Link to="/stockpage"> 
                                    <div className='business_company_img_txt'>
                                        <div className='business_company_img'>
                                            <img src={Companies_img7} alt="/" />
                                        </div>
                                        <div className='company_lrm_name_stck'>
                                            <p className='company_lrm'>lorem ipsum</p>
                                            <p className='company_stck'>Stock</p>
                                        </div>
                                    </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph1} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className='business_company_img_amnt_all'>
                                <div className='business_company_img_amnt mb-4'>
                                <Link to="/stockpage"> 
                                    <div className='business_company_img_txt'>
                                        <div className='business_company_img'>
                                            <img src={Companies_img8} alt="/" />
                                        </div>
                                        <div className='company_lrm_name_stck'>
                                            <p className='company_lrm'>lorem ipsum</p>
                                            <p className='company_stck'>Stock</p>
                                        </div>
                                    </div>
                                    </Link>
                                    <div className='business_company_img_graph'>
                                        <img src={business_graph1} alt='/' />
                                    </div>

                                    <div className='companies_amnt'>
                                        <span className='companies_amnt_price'>$20.05</span>
                                        <span className='companies_amnt_percentage'>+86.28(0.34%)</span>
                                    </div>
                                    <div className='companies_edit_cross'>
                                        <a href="#" ><img src={system_uicons_cross} alt="/" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >


                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >


                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >


                    </div>

                    <div
                        className={toggleState === 5 ? "content  active-content" : "content"}
                    >


                    </div>

                </div>
            </section>
        </>
    )
}
