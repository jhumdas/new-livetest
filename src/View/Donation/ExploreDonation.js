import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../../images/donate1.png"
import b from '../../images/Vector 6.png'
import bbb from '../../images/pppp.png'
import c from '../../images/poorboy.png';
import w from '../../images/fundraiser.png';
import w1 from '../../images/blackarrow.png';
import w2 from '../../images/chita (2).png';
import d1 from '../../images/donar1.png';
import d2 from '../../images/donar2.png';
import d3 from '../../images/donar3.png';
import d4 from '../../images/donar4.png';
import e from '../../images/dn3.png';
import f from '../../images/d98.png';
import g from '../../images/d23.png';

export default function ExploreDonation() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8];
  var settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }

    ]
  };
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
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
      }

    ]
  };
  return (
    <>

      <div className='highlight fundraiserSlideSection'>
        <div className='container'>
          <h2>explore donation fundraiser</h2>
          <div className='slider shop_best_selling_prdt selectsong-slider donationslider fundraiserSlide' style={{ paddingTop: "0" }}>
            <Slider {...settings1}>
              {loop.map((item, index) => {
                return (
                  <div className='fundraiser'>
                    <div>
                      <img src={w} />
                    </div>
                  </div>
                )
              }

              )}


            </Slider>
          </div>
        </div>
      </div>
      <div className='highlight'>
        <div className='container'>
          <h2>Todays highlights</h2>
          <div className='slider shop_best_selling_prdt selectsong-slider donationslider' style={{ paddingTop: "0" }}>
            <Slider {...settings}>
              {loop.map((item, index) => {
                return (
                  <div className='box'>
                    <div style={{ position: "relative" }}>
                      <img src={c} />
                      <div className='img-cnt'>5 days left</div>
                    </div>
                    <div className='cnt'>
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua </p>
                      <h6>$ 9,80,765 raised</h6>
                      <div className="progress progress_line">
                        <div
                          className="progress-bar progress_shre_bar w-50"
                          role="progressbar"
                          aria-valuenow=""
                          aria-valuemin=""
                          aria-valuemax=""
                        />
                      </div>

                      <h6 style={{ color: "#25333a" }}>last donation 3 hr ago</h6>
                      <div className='donars'>
                        <div className='more-images'>
                          <img src={d1} className='image1' />
                          <img src={d2} className='image2' />
                          <img src={d3} className='image3' />
                          <img src={d4} className='image4' />
                        </div>
                        <h5>25,565  donars</h5>
                        <div><a href="#">Donate</a></div>

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
      <div>
        <div className='container'>
          <div className='monthlyDonor'>
            <div className='leftPart'>
              <h3>become a monthly donor with bushido</h3>
              <h6>start your journey with just $100/mo.</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </div>

            <div className='rightPart'>
              <div className='rightInbox'>
                <div className='textBox'>
                  <div>
                    <h4>medical</h4>
                    <h6>your support will help a child recieve medical care</h6>
                  </div>
                  <div>
                    <h4>give $100/mo</h4>
                    <div><img src={w1} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
