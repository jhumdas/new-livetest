import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import business_img_profile from '../../images/business_img_profile.png';
import { Link } from 'react-router-dom';

export default function Index() {
  const loop = [1, 2, 3, 4, 5];
  const [toggleState, setToggleState] = useState(1);
  const [mediumlist, setMediumlist] = useState(true);
  const [explore, setExplore] = useState(true);
  const exploreClick = () => {
    setExplore(!explore);
  }
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleClick = () => {
    setMediumlist(!mediumlist);
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

  var settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 2.9,
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
              <a href="#" className='business-explr_btn' Onclick={() => exploreClick(setExplore)}>
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

            <div className='business_balance_for_stock mt-4 mb-4'>
              <div className='business_available_txt_main'>
                <div className='business_available_txt'>
                  <h5 className='business_available_txt_hhh'>Balance available for stock</h5>
                  <p className='business_available_txt_ppp'>$0.00</p>
                </div>
                <div className='business_mny'>
                  <a href="#" className='business_mny_btn'>Add money</a>
                </div>
              </div>
            </div>

            <div className='business_all_companies mt-4 mb-4'>
              <div className='business_companies_hhead'>
                <h4 className='business_companies_txt mb-3'>
                  All companies
                </h4>
              </div>
              <div className='business_companies_brdr_main'>
                <Slider {...settings2}>
                  {loop.map((item, index) => {
                    return (
                      <div className='business_companies'>
                        <div className='business_companies_brdr'>
                          <div className='business_companies_brdr_img_txt_date'>

                            <div className='business_companies_brdr_img_txt'>
                              <div className='business_companies_brdr_img'>
                                <img src={business_img_profile} alt='/' />
                              </div>
                              <div className='business_companies_brdr_txt'>
                                <p className='business_companies_brdr_txt_ppp'>
                                  Lorem Ipsum
                                </p>
                              </div>
                            </div>

                            <div className='business_companies_brdr_date'>
                              <p className='business_companies_brdr_date_txt'>25 jun’ 23</p>
                            </div>
                          </div>
                          <div className='companies_amount_percentage'>
                            <span className='companies_amount_percentage_amnt'>$20.87<span className='companies_amount_percentage_amnt_percentage'>+99.67(0.78%)</span></span>
                          </div>


                          <div className='companies_graph_brdr'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="381" height="147" viewBox="0 0 381 147" fill="none">
                              <path d="M0 74.549C0 74.549 24.5161 48.4967 31.871 51.8105C39.2258 55.1244 46.3046 85.4077 49.0323 83.8445C51.7599 82.2814 61.2903 46.2875 66.5832 46.2041C71.8761 46.1207 66.1448 90.4722 73.5484 90.4722C80.9519 90.4722 110.42 0.626018 118.408 1.00117C126.396 1.37632 112.774 81.6353 118.408 81.6353C124.042 81.6353 139.109 59.4804 145.554 58.9593C152 58.4383 163.203 102.625 169.161 102.625C175.12 102.625 181.306 66.7125 185.04 65.3369C188.774 63.9614 201.032 78.0922 209.718 78.0922C218.405 78.0922 216.115 57.7505 222.058 57.5421C228 57.3336 237.806 80.5307 241.8 80.218C245.795 79.9054 268.898 20.3204 277.032 15.36C285.166 10.3997 284.387 81.6353 291.157 81.6353C297.928 81.6353 318.71 53.2903 323.239 54.7076C327.769 56.1248 340.969 144.288 348.129 145.705C355.289 147.122 380 44.0782 380 44.0782" stroke="#1FAF38" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    )
                  }

                  )}
                </Slider>
              </div>


            </div>

            <div className='business_top_companies mt-4 mb-4'>
              <div className='business_companies_hhead'>
                <h4 className='business_companies_txt mb-3'>
                  Top companies
                </h4>
              </div>
              <div className='business_companies_brdr_main'>
                <Slider {...settings2}>
                  {loop.map((item, index) => {
                    return (
                      <div className='business_companies'>
                        <div className='business_companies_brdr'>
                          <div className='business_companies_brdr_img_txt_date'>

                            <div className='business_companies_brdr_img_txt'>
                              <div className='business_companies_brdr_img'>
                                <img src={business_img_profile} alt='/' />
                              </div>
                              <div className='business_companies_brdr_txt'>
                                <p className='business_companies_brdr_txt_ppp'>
                                  Lorem Ipsum
                                </p>
                              </div>
                            </div>

                            <div className='business_companies_brdr_date'>
                              <p className='business_companies_brdr_date_txt'>25 jun’ 23</p>
                            </div>
                          </div>
                          <div className='companies_amount_percentage'>
                            <span className='companies_amount_percentage_amnt'>$20.87<span className='companies_amount_percentage_amnt_percentage'>+99.67(0.78%)</span></span>
                          </div>


                          <div className='companies_graph_brdr'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="381" height="147" viewBox="0 0 381 147" fill="none">
                              <path d="M0 74.549C0 74.549 24.5161 48.4967 31.871 51.8105C39.2258 55.1244 46.3046 85.4077 49.0323 83.8445C51.7599 82.2814 61.2903 46.2875 66.5832 46.2041C71.8761 46.1207 66.1448 90.4722 73.5484 90.4722C80.9519 90.4722 110.42 0.626018 118.408 1.00117C126.396 1.37632 112.774 81.6353 118.408 81.6353C124.042 81.6353 139.109 59.4804 145.554 58.9593C152 58.4383 163.203 102.625 169.161 102.625C175.12 102.625 181.306 66.7125 185.04 65.3369C188.774 63.9614 201.032 78.0922 209.718 78.0922C218.405 78.0922 216.115 57.7505 222.058 57.5421C228 57.3336 237.806 80.5307 241.8 80.218C245.795 79.9054 268.898 20.3204 277.032 15.36C285.166 10.3997 284.387 81.6353 291.157 81.6353C297.928 81.6353 318.71 53.2903 323.239 54.7076C327.769 56.1248 340.969 144.288 348.129 145.705C355.289 147.122 380 44.0782 380 44.0782" stroke="#1FAF38" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    )
                  }

                  )}
                </Slider>
              </div>
            </div>

            <div className='business_Gainers_companies mt-4 mb-4'>
              <div className='business_companies_hhead_btn mb-3'>
                <h4 className='business_companies_txt '>
                  Gainers
                </h4>
                <div className='hhead_btn_mdm'>
                  <a href="#" className='btn_mdm' onClick={() => handleClick(setMediumlist)}>
                    Medium
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                  {mediumlist ?
                    <ul className='btn_mdm_list'>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Large</a>
                      </li>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Medium</a>
                      </li>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Small</a>
                      </li>
                    </ul>
                    :
                    <></>
                  }
                </div>
              </div>
              <div className='business_companies_brdr_main'>
                <Slider {...settings2}>
                  {loop.map((item, index) => {
                    return (
                      <div className='business_companies'>
                        <div className='business_companies_brdr'>
                          <div className='business_companies_brdr_img_txt_date'>

                            <div className='business_companies_brdr_img_txt'>
                              <div className='business_companies_brdr_img'>
                                <img src={business_img_profile} alt='/' />
                              </div>
                              <div className='business_companies_brdr_txt'>
                                <p className='business_companies_brdr_txt_ppp'>
                                  Lorem Ipsum
                                </p>
                              </div>
                            </div>

                            <div className='business_companies_brdr_date'>
                              <p className='business_companies_brdr_date_txt'>25 jun’ 23</p>
                            </div>
                          </div>
                          <div className='companies_amount_percentage'>
                            <span className='companies_amount_percentage_amnt'>$20.87<span className='companies_amount_percentage_amnt_percentage'>+99.67(0.78%)</span></span>
                          </div>


                          <div className='companies_graph_brdr'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="381" height="147" viewBox="0 0 381 147" fill="none">
                              <path d="M0 74.549C0 74.549 24.5161 48.4967 31.871 51.8105C39.2258 55.1244 46.3046 85.4077 49.0323 83.8445C51.7599 82.2814 61.2903 46.2875 66.5832 46.2041C71.8761 46.1207 66.1448 90.4722 73.5484 90.4722C80.9519 90.4722 110.42 0.626018 118.408 1.00117C126.396 1.37632 112.774 81.6353 118.408 81.6353C124.042 81.6353 139.109 59.4804 145.554 58.9593C152 58.4383 163.203 102.625 169.161 102.625C175.12 102.625 181.306 66.7125 185.04 65.3369C188.774 63.9614 201.032 78.0922 209.718 78.0922C218.405 78.0922 216.115 57.7505 222.058 57.5421C228 57.3336 237.806 80.5307 241.8 80.218C245.795 79.9054 268.898 20.3204 277.032 15.36C285.166 10.3997 284.387 81.6353 291.157 81.6353C297.928 81.6353 318.71 53.2903 323.239 54.7076C327.769 56.1248 340.969 144.288 348.129 145.705C355.289 147.122 380 44.0782 380 44.0782" stroke="#1FAF38" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    )
                  }

                  )}
                </Slider>
              </div>
            </div>

            <div className='business_loosers_companies mt-4 mb-4'>
              <div className='business_companies_hhead_btn mb-3'>
                <h4 className='business_companies_txt '>
                  loosers
                </h4>
                <div className='hhead_btn_mdm'>
                  <a href="#" className='btn_mdm' >
                    Medium
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                  {/* {mediumlist ?
                    <ul className='btn_mdm_list'>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Large</a>
                      </li>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Medium</a>
                      </li>
                      <li className='btn_mdm_list_total'>
                        <a href="" >Small</a>
                      </li>
                    </ul>
                    :
                    <></>
                  } */}
                </div>
              </div>
              <div className='business_companies_brdr_main'>
                <Slider {...settings2}>
                  {loop.map((item, index) => {
                    return (
                      <div className='business_companies'>
                        <div className='business_companies_brdr'>
                          <div className='business_companies_brdr_img_txt_date'>

                            <div className='business_companies_brdr_img_txt'>
                              <div className='business_companies_brdr_img'>
                                <img src={business_img_profile} alt='/' />
                              </div>
                              <div className='business_companies_brdr_txt'>
                                <p className='business_companies_brdr_txt_ppp'>
                                  Lorem Ipsum
                                </p>
                              </div>
                            </div>

                            <div className='business_companies_brdr_date'>
                              <p className='business_companies_brdr_date_txt'>25 jun’ 23</p>
                            </div>
                          </div>
                          <div className='companies_amount_percentage'>
                            <span className='companies_amount_percentage_amnt'>$20.87<span className='companies_amount_percentage_amnt_percentage'>-99.67(0.78%)</span></span>
                          </div>


                          <div className='companies_graph_brdr companies_graph_brdr_rd'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="381" height="132" viewBox="0 0 381 132" fill="none">
                              <path d="M0 66.8783C0 66.8783 24.5161 43.5431 31.871 46.5113C39.2258 49.4795 46.3046 76.6044 49.0323 75.2043C51.7599 73.8042 61.2903 41.5642 66.5832 41.4896C71.8761 41.4149 66.1448 81.1408 73.5484 81.1408C80.9519 81.1408 110.42 0.665022 118.408 1.00105C126.396 1.33708 112.774 73.2255 118.408 73.2255C124.042 73.2255 139.109 53.3812 145.554 52.9145C152 52.4478 163.203 92.026 169.161 92.026C175.12 92.026 181.306 59.859 185.04 58.6269C188.774 57.3948 201.032 70.0519 209.718 70.0519C218.405 70.0519 216.115 51.8317 222.058 51.6451C228 51.4584 237.806 72.2361 241.8 71.956C245.795 71.676 268.898 18.3054 277.032 13.8624C285.166 9.41935 284.387 73.2255 291.157 73.2255C297.928 73.2255 318.71 47.8367 323.239 49.1062C327.769 50.3756 340.969 129.344 348.129 130.613C355.289 131.883 380 39.5854 380 39.5854" stroke="#F44336" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    )
                  }

                  )}
                </Slider>
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

