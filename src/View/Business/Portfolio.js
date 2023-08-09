import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Business_portfolio_graph from '../../images/Business_portfolio_graph.png';
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
import business_graph from "../../images/business_graph.png";
import system_uicons_cross from "../../images/system_uicons_cross.png";
import simple_icons_cashapp from '../../images/simple_icons_cashapp.png';
import mdi_money from '../../images/mdi_money.png';
import material_symbols_done_all from '../../images/material_symbols_done_all.png'
export default function Portfolio() {
    const [toggleState, setToggleState] = useState(1);
    const [togglebuttonstate, setTogglebuttonstate] = useState(1);
    const [explore, setExplore] = useState(true)
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const toggleButton = (index) => {
        setTogglebuttonstate(index)
    }
    const handleClickexplore = () => {
        setExplore(!explore)
    }
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
                        <div className='business_portfolio mt-4 mb-5'>
                            <div className='business_porfolio_img'>
                                <img src={Business_portfolio_graph} alt='/' />
                            </div>
                        </div>

                        <div className='business_portfolio_amont_percnt mt-4 mb-5'>
                            <div className='business_portfolio_amont_bg'>
                                <div className='business_portflo_amnt'>
                                    <p className='business_portflo_amnt_ppp'>$657,869.09</p>
                                    <p className='business_portflo_percnt_ppp'>+45.07(0.67%)</p>
                                </div>
                            </div>
                        </div>

                        <div className='business_holdsong_position'>
                            {/* <a href="#" className='business_holdsong'></a> */}
                            {/* <Link to="/position" className='business_position'>Positions</Link> */}
                            <button
                                className={togglebuttonstate === 1 ? "business_holdsong  active_business_holdsong" : "business_holdsong"}
                                onClick={() => toggleButton(1)}
                            >
                                Holdongs
                            </button>
                            <button
                                className={togglebuttonstate === 2 ? "business_holdsong  active_business_holdsong" : "business_holdsong"}
                                onClick={() => toggleButton(2)}
                            >
                                Positions
                            </button>
                        </div>

                        <div
                            className={togglebuttonstate === 1 ? "content-business  active-content-business" : "content-business"}
                        >
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
                            className={togglebuttonstate === 2 ? "content-business  active-content-business" : "content-business"}
                        >
                            <div className='business-position_main mt-4 mb-4'>
                                <div className='business_position_main_brdr'>
                                    <div className='row'>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                                            <div className='business_main_brdr_img_txt'>
                                                <div className='business_main_brdr'>
                                                    <div className='business_main_img'>
                                                        <img src={simple_icons_cashapp} alt='/' />
                                                    </div>
                                                </div>
                                                <div className='business_main_brdr_txt'>
                                                    <p className='business_txt_position_cash'>cash available</p>
                                                    <p className='business_txt_position_amnt'>$8,756.98</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                                            <div className='business_main_brdr_img_txt'>
                                                <div className='business_main_brdr'>
                                                    <div className='business_main_img'>
                                                        <img src={material_symbols_done_all} alt='/' />
                                                    </div>
                                                </div>
                                                <div className='business_main_brdr_txt'>
                                                    <p className='business_txt_position_cash'>Total Returns</p>
                                                    <p className='business_txt_position_amnt'>$586,156.09</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>

                                            <div className='business_main_brdr_img_txt'>
                                                <div className='business_main_brdr'>
                                                    <div className='business_main_img'>
                                                        <img src={mdi_money} alt='/' />
                                                    </div>
                                                </div>
                                                <div className='business_main_brdr_txt'>
                                                    <p className='business_txt_position_cash'>Equity</p>
                                                    <p className='business_txt_position_amnt'>$808,76.98</p>
                                                </div>
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
