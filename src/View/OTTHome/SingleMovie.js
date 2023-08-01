import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c from '../../images/pepicons-pencil_crown.png'
import a from '../../images/iconoir_movie.png'
import b from '../../images/video-icon.png'
import best_selling1 from '../../images/Rectangle 499.png';
import best_selling2 from '../../images/Rectangle 500.png';
import best_selling3 from '../../images/Rectangle 498 (1).png';
import best_selling4 from '../../images/Rectangle 498.png';
import best_selling5 from '../../images/Rectangle 500.png';
import best_selling6 from '../../images/Rectangle 498 (1).png';
import banerimage from '../../images/Rectangle 502.png';
export default function SingleMovie() {
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

            <section className='single-movie'>
                <div className='container'>
                    <div className='movie-screen'>
                        <h3>Dora The Explorer</h3>
                        <div className="Movietype">
                            <span className='u-box'>U</span>
                            <span>Movie</span>
                            <span className='m-dot'></span>
                            <span>Thriller</span>
                            <span className='m-dot'></span>
                            <span>Drama</span>
                            <span className="v-line" />
                            <span>English</span>
                            <span className="v-line" />
                            <span>2023</span>
                        </div>
                        <div className='d-flex' style={{ alignItems: "center" }}>
                            <h6><img src={a} />Watch Movie</h6>
                            <a className='movie-btn ml-3'><img src={c} />Subscribe now</a>
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
                    <section className='shop_best_selling_prdt selectsong-slider'>
                        <div className=''>
                            <div className='best_selling_txt'>
                                <h2>More Suggestion</h2>
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
                                <h2>Tv shows</h2>
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
            </section>
        </>
    )
}
