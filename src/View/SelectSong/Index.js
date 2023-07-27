import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SelectPodcast from '../../Component/SelectPodcast'
import v from '../../images/Rectangle 446 (1).png'
import best_selling1 from '../../images/best_selling1.png';
import best_selling2 from '../../images/best_selling2.png';
import best_selling3 from '../../images/best_selling3.png';
import best_selling_icon from '../../images/best_selling_icon.png';
import EpisodeDetails from '../../Component/EpisodeDetails';
export default function Index() {
    var settings1 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.9,
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

            <section className='select-song selectpodcast-details'>
                <div className='container'>
                    <SelectPodcast image={v} name="Lorem ipsum dolor sit amet consectetur." Forsongtype={true} forSongName={true} queue={true} />

                    <section className='shop_best_selling_prdt selectsong-slider'>
                        <div className='container'>
                            <div className='best_selling_txt'>
                                <h2>Related Song</h2>
                            </div>
                            <Slider {...settings1}>
                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>

                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1'>
                                                Product Name
                                            </h4>
                                            <p className='best_selling_product_txt2'>
                                                $ 100
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling2} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBlock:"0",fontSize:"16px"}}>
                                            Song Name 
                                            </h4>
                                            <p className='' style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling3} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBlock:"0",fontSize:"16px"}}>
                                            Song Name 
                                            </h4>
                                            <p className='best_selling_product_txt2' style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBlock:"0",fontSize:"16px"}}>
                                            Song Name 
                                            </h4>
                                            <p className='best_selling_product_txt2' style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling2} alt='/'></img>
                                            <div className='best_selling_product_icon' style={{paddingBlock:"0",fontSize:"16px"}}>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1'>
                                            Song Name 
                                            </h4>
                                            <p className='best_selling_product_txt2' style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='best_selling_product'>
                                    <div className='best_selling_product_bg_img_txt'>
                                        <div className='best_selling_product_bg'>
                                            <img src={best_selling3} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBlock:"0",fontSize:"16px"}}>
                                            Song Name 
                                            </h4>
                                            <p className='best_selling_product_txt2' style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </section>
                    <EpisodeDetails songDetails={true}/>
                </div>
            </section>

        </>
    )
}
