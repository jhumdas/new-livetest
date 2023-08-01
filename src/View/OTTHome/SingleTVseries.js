import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c from '../../images/pepicons-pencil_crown.png'
import a from '../../images/iconoir_movie.png'
import b from '../../images/video-icon.png'
import z from '../../images/ppp.png'
export default function SingleTVseries() {
    const loop = [1, 2, 3, 4, 5,6,7];
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    var settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.10,
        slidesToScroll: 1,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
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

            <section className='single-movie'>
                <div className='container'>
                    <div className='movie-screen'>
                        <h3>Money Heist Season 1</h3>
                        <div className="Movietype">
                            <span className='u-box'>A</span>
                            <span>TV Show</span>
                            <span className='m-dot'></span>
                            <span>Thriller</span>
                            <span className='m-dot'></span>
                            <span>Drama</span>
                            <span className="v-line" />
                            <span>English</span>
                            <span className="v-line" />
                            <span>2017</span>
                        </div>
                        <div className='d-flex' style={{ alignItems: "center" }}>
                            <h6><img src={a} />Watch TV Show</h6>
                            <a className='movie-btn ml-3'><img src={c} />Subscribe now</a>
                            <h6 className='ml-3'><img src={z} />Add to watchlist</h6>
                        </div>
                        <div className="videoIcon">
                            <img src={b} />
                        </div>

                    </div>
                    <div className="episodeDetails mt-4">
                        <h5>Description</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Morbi pretium cras fringilla amet
                            platea lacinia. Nulla habitant nunc fusce hendrerit et molestie porttitor.
                            Arcu suspendisse accumsan ullamcorper ac. Amet semper mi dui volutpat dui
                            ut.<span>Read more</span>{" "}
                        </p>
                        <div className="song-details mb-3">
                            <p><strong>Releasing year :</strong>  2022</p>
                            <p> <strong>Cast & Crew :</strong> Sasha Toro , Kathleen Herles , Marc Weiner, Isabela Merced</p>
                            <p><strong>Audio & Subtitle :</strong>English</p>
                        </div>

                    </div>
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
                                <div className='podcast-banner-slidewrap '>
                                    <Slider {...settings1}>
                                        {loop.map((item, index) => {
                                            return (
                                                <div className='podcast-banner-slide tvSeries'>
                                                    <div className='box'>
                                                        <div className='boxCnt'>
                                                            <div className='d-flex' style={{justifyContent:"space-between"}}><p>Episode 1</p><p>01:05:00</p></div>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Nulla interdum dictum faucibus nullam nibh fringilla amet at.</p>
                                                          
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
