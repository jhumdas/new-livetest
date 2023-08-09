import React from 'react';
import single_stock_image from '../../images/single_stock_image.png';
import material_symbols_done_all from '../../images/material_symbols_done_all.png'
import simple_icons_cashapp from '../../images/simple_icons_cashapp.png';
import mdi_money from '../../images/mdi_money.png';
import triangle from '../../images/triangle.png'
export default function Singlestock() {
    const loop = [1, 2];
    return (
        <>
            <section className='stock_single_page'>
                <div className='container'>
                    <div className='stock_single_page_img mb-4'>
                        <img src={single_stock_image} alt="/" />
                    </div>
                    <div className='business_portfolio_amont_percnt mt-4 mb-5'>
                        <div className='business_portfolio_amont_bg'>
                            <div className='business_portflo_amnt'>
                                <p className='business_portflo_amnt_ppp'>$657,869.09</p>
                                <p className='business_portflo_percnt_ppp'>+45.07(0.67%)</p>
                            </div>
                        </div>
                    </div>

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

                    <div className='business-position_main business_performance  mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion1">
                                {/* Accordion item 1 */}
                                <div className="card">
                                    <div
                                        id="headingOne"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                className="btn btn-link collapsible-link"
                                            >
                                                Performance
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseOne"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='performace_high_low'>
                                                <div className='performane_today_low'>
                                                    <p className='today_low_pp'>Today's Low</p>
                                                    <p className='today_low_pp'>798.08</p>
                                                </div>
                                                <div className='performane_today_low'>
                                                    <p className='today_low_pp'>Today's High</p>
                                                    <p className='today_low_pp'>798.08</p>
                                                </div>
                                            </div>

                                            <div className='input_high_low'>
                                                <div className='input_high_low_grn'>
                                                    <div className='input_high_low_btn'>
                                                        <img src={triangle} alt='/' />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='performace_high_low'>
                                                <div className='performane_today_low'>
                                                    <p className='today_low_pp'>Today's Low</p>
                                                    <p className='today_low_pp'>798.08</p>
                                                </div>
                                                <div className='performane_today_low'>
                                                    <p className='today_low_pp'>Today's High</p>
                                                    <p className='today_low_pp'>798.08</p>
                                                </div>
                                            </div>

                                            <div className='input_high_low'>
                                                <div className='input_high_low_grn'>
                                                    <div className='input_high_low_btn'>
                                                        <img src={triangle} alt='/' />
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>
                    </div>

                    <div className='business-position_main business_performance business_market_strt mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion2">
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingTwo"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="true"
                                                aria-controls="collapseTwo"
                                                className="btn btn-link collapsible-link"
                                            >
                                                Spot Market Stats
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        aria-labelledby="headingtwo"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='spot_market_txt'>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Open 567.87</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Volume 87,987.876</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Prev.Close 087.02</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Number Of Share Holders 564,03.01</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Lower 98.02</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Upper Circuit 98.75</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Market Cap 85.056</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Price Earning Ratio N/A</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Dividend Yield N/A </h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Earning Per Share N/A</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>1 Year High(52w) 456.04</h6>
                                                <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>1 Year Low(52w)110.01</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>

                    <div className='business-position_main business_performance business_market_strt mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion2">
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingThree"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseThree"
                                                aria-expanded="true"
                                                aria-controls="collapseThree"
                                                className="btn btn-link collapsible-link"
                                            >
                                                About Company
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseThree"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='spot_market_txt'>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Parent Organisation</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>CEO</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Founded In</h6>
                                                    <h5 className='spot_market_point_lrm'>1990</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Number Of Share Holders 564,03.01</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>NSE Symbol</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>

                    <div className='business-position_main business_performance business_market_strt mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion2">
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingFour"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseFour"
                                                aria-expanded="true"
                                                aria-controls="collapseFour"
                                                className="btn btn-link collapsible-link"
                                            >
                                                Share Holding Pattern
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseFour"
                                        aria-labelledby="headingFour"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='spot_market_txt'>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Parent Organisation</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>CEO</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Founded In</h6>
                                                    <h5 className='spot_market_point_lrm'>1990</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>Number Of Share Holders 564,03.01</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                                <div className='spot_market_txt_main'>
                                                    <h6 className='spot_market_point_txt'><span className='spot_market_point'></span>NSE Symbol</h6>
                                                    <h5 className='spot_market_point_lrm'>Lorem</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>



                    <div className='business-position_main business_performance business_market_strt mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion2">
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingFive"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseFive"
                                                aria-expanded="true"
                                                aria-controls="collapseFive"
                                                className="btn btn-link collapsible-link"
                                            >
                                                News About This Company
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseFive"
                                        aria-labelledby="headingFive"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                        {loop.map((item, index) => {
                                            return(
                                            <div className='company_news_abt_update'>
                                                <div className='company_news_about_flx'>
                                                    <div className='company_news_about_txt'>
                                                        <h5 className='company_news_about_txt_hhh'>Lorem ipsum</h5>
                                                    </div>
                                                    <div className='company_news_about_txt'>
                                                        <p className='company_news_about_txt_ppp'>1 day</p>
                                                    </div>
                                                </div>

                                                <div className='company_news_update' style={index == loop.length-1 ? { border:"none"} : {}}>
                                                    <p className='company_news_update_txt'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,...</p>
                                                </div>
                                            </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>
                     
                    <div className='business-position_main business_performance business_market_strt mt-4 mb-4'>
                        <div className='business_position_main_brdr'>
                            <div id="accordionExample" className="accordion2">
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingFive"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseFive"
                                                aria-expanded="true"
                                                aria-controls="collapseFive"
                                                className="btn btn-link collapsible-link"
                                            >
                                             People Also Bought
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseFive"
                                        aria-labelledby="headingFive"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='people_bought_compamy_txt_price_amnt'>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>



                </div>
            </section>
        </>
    )
}
