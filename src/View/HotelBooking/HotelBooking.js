import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from '../../images/hotel2.png'
import l from '../../images/location.png'
import t from '../../images/tran-heart.png'
import g1 from '../../images/gallery1.png'
import g2 from '../../images/gallery2.png'
import g3 from '../../images/gallery3.png'
import g4 from '../../images/gallery4.png'
import g5 from '../../images/gallery5.png'
export default function HotelBooking() {
  const loop = [1, 2, 3, 4, 5, 6];
  var settings = {
    dots: false,
    infinite: true,
    navs: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

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
      <div className='hotel_booking'>
        <div className='container'>
          <div className='recent_viewed'>
            <h3 className='hotel_slider_heading'>Recently Viewed</h3>
            <div className='hotel_slider podcast-banner-slidewrap'>
              <Slider {...settings}>
                {loop.map(() => {
                  return (
                    <div className='box'>
                      <div className='image_box'>
                        <img src={a} />
                        <div className='wish_icon'>
                          <img src={t} />
                        </div>
                      </div>
                      <div className='img_content'>
                        <div className='rating'>
                          <h6>5.0<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h6>
                          <h6><img src={l} />London</h6>
                        </div>
                        <div className='rating'>
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                          <a href="#">$1,750</a>
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
      </div>

      <div className='popular_destination'>
        <div className='container'>
          <h3 className='hotel_slider_heading'>Recently Viewed</h3>
          <p>We have selected some best locations around the world for you.</p>
          <div className='gallery_box'>
            <div className='leftBox'>
              <img src={g1} />
              <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div>
              <div className='rightBox'>
                <div className='img_div'>
                  <img src={g2} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>
                <div className='img_div'>
                  <img src={g3} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>

              </div>
              <div className='rightBox' style={{ marginTop: "13px" }}>
                <div className='img_div'>
                  <img src={g4} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>
                <div className='img_div'>
                  <img src={g5} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>

              </div>
            </div>

          </div>
          <div className='gallery_box mt-3'>
          <div>
              <div className='rightBox'>
                <div className='img_div'>
                  <img src={g2} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>
                <div className='img_div'>
                  <img src={g3} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>

              </div>
              <div className='rightBox' style={{ marginTop: "13px" }}>
                <div className='img_div'>
                  <img src={g4} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>
                <div className='img_div'>
                  <img src={g5} />
                  <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
                </div>

              </div>
            </div>
            <div className='leftBox'>
              <img src={g1} />
              <div className='cntOnImg'>
                <h5>Location Name</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
