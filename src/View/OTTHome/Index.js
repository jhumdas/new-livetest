import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SongSearch from '../../Component/SongSearch'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h from '../../images/Rectangle 443.png'
import d from '../../images/bi_download.png'
import best_selling1 from '../../images/Rectangle 499.png';
import best_selling2 from '../../images/Rectangle 500.png';
import best_selling3 from '../../images/Rectangle 498 (1).png';
import best_selling4 from '../../images/Rectangle 498.png';
import best_selling5 from '../../images/Rectangle 500.png';
import best_selling6 from '../../images/Rectangle 498 (1).png';
import banerimage from '../../images/Rectangle 502.png';
import best_selling_icon from '../../images/best_selling_icon.png';
import ProductSearch from '../../Component/ProductSearch'
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
    slidesToShow: 1.9,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 1
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
      <section className='Ott-home'>
        <div className='container'>
          <ProductSearch iconD={true} iconA={false} iconB={false} iconC={false} iconE={true} iconF={true} />
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
           Movies
              </button>
              <button
                className={toggleState === 3 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                onClick={() => toggleTab(3)}
              >
              Tv shows
              </button>
              <button
                className={toggleState === 4 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                onClick={() => toggleTab(4)}
              >
             Action
              </button>
              <button
                className={toggleState === 5 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                onClick={() => toggleTab(5)}
              >
              Drama
              </button>
              <button
                className={toggleState === 6 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                onClick={() => toggleTab(6)}
              >
                Romance
              </button>
              <button
                className={toggleState === 7 ? "podcast_tab active_episode_tab" : "podcast_tab"}
                onClick={() => toggleTab(7)}
              >
               Crime
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
                        </div>
                      </div>

                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling2} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling3} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling4} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling5} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling6} alt='/'></img>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>
                <section className='shop_best_selling_prdt selectsong-slider'>
                  <div className=''>
                    <div className='best_selling_txt'>
                      <h2>Top 10 movies</h2>
                    </div>
                    <Slider {...settings3}>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling1} alt='/'></img>
                          </div>
                        </div>
                      </div>

                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling2} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling3} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling4} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling5} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling6} alt='/'></img>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>
                <section className='shop_best_selling_prdt selectsong-slider'>
                  <div className=''>
                    <div className='best_selling_txt'>
                      <h2>Top TV Shows </h2>
                    </div>
                    <Slider {...settings3}>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling1} alt='/'></img>
                          </div>
                        </div>
                      </div>

                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling2} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling3} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling4} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling5} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling6} alt='/'></img>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>

                <section>
                  <div className='container'>
                    <div>
                      <img src={banerimage}/>
                    </div>
                  </div>
                </section>


                <section className='shop_best_selling_prdt selectsong-slider'>
                  <div className=''>
                    <div className='best_selling_txt'>
                      <h2>Top Horror Movies</h2>
                    </div>
                    <Slider {...settings3}>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling1} alt='/'></img>
                          </div>
                        </div>
                      </div>

                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling2} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling3} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling4} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling5} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling6} alt='/'></img>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>
                <section className='shop_best_selling_prdt selectsong-slider'>
                  <div className=''>
                    <div className='best_selling_txt'>
                      <h2>Top Comedy Movies</h2>
                    </div>
                    <Slider {...settings3}>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling1} alt='/'></img>
                          </div>
                        </div>
                      </div>

                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling2} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling3} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling4} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling5} alt='/'></img>
                          </div>
                        </div>
                      </div>
                      <div className='best_selling_product'>
                        <div className='best_selling_product_bg_img_txt'>
                          <div className='best_selling_product_bg'>
                            <img src={best_selling6} alt='/'></img>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>
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
        </div>
      </section>


    </>
  )
}
