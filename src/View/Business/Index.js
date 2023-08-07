import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Index() {
  const loop = [1, 2, 3, 4, 5];
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  var settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
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
            <a href="#" className='business-explr_btn'>
              EXPLORE
              <i class="fa-solid fa-angle-down"></i>
            </a>
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
                <p className='business_investment_total'>Total ReturnS</p>
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

        </div>
      </div>
    </>
  )
}

