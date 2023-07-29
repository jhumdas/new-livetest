import React from 'react'
import SongSearch from '../../Component/SongSearch'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import best_selling1 from '../../images/p1 (4).png';
import best_selling2 from '../../images/p1 (3).png';
import best_selling3 from '../../images/p1 (2).png';
import best_selling_icon from '../../images/ph_heart-light.png';
export default function Index() {
    var settings1 = {
        dots: false,

        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.11,

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
        
                    
                    <section className='shop_best_selling_prdt selectsong-slider'>
                        <div className='container'>
                         
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
                                            <h4 className='best_selling_product_txt1'  style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
                                            </h4>
                                            <p className=''  style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Wildlife podcast  
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Motivation podcast 
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
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Horror podcast 
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
                                            <img src={best_selling2} alt='/'></img>
                                            <div className='best_selling_product_icon' style={{paddingBottom:"0",fontSize:"16px"}}>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Wildlife podcast 
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
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>

                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1'  style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
                                            </h4>
                                            <p className=''  style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            
                            </Slider>
                        </div>
                    </section>
                    <section className='shop_best_selling_prdt selectsong-slider'>
                        <div className='container'>
                         
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
                                            <h4 className='best_selling_product_txt1'  style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
                                            </h4>
                                            <p className=''  style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Wildlife podcast  
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Motivation podcast 
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
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Horror podcast 
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
                                            <img src={best_selling2} alt='/'></img>
                                            <div className='best_selling_product_icon' style={{paddingBottom:"0",fontSize:"16px"}}>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>
                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
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
                                            <h4 className='best_selling_product_txt1' style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Wildlife podcast 
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
                                            <img src={best_selling1} alt='/'></img>
                                            <div className='best_selling_product_icon'>
                                                <img src={best_selling_icon} alt='' />
                                            </div>
                                        </div>

                                        <div className='best_selling_product_txt_main'>
                                            <h4 className='best_selling_product_txt1'  style={{paddingBottom:"0",fontSize:"16px"}}>
                                            Romantic podcast 
                                            </h4>
                                            <p className=''  style={{fontSize:"12px"}}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            
                            </Slider>
                        </div>
                    </section>
              

        </>
    )
}
