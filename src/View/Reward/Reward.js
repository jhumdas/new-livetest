import React from 'react'
import rr1 from '../../images/rr2.png'
import rr2 from '../../images/rr1.png'
import rr3 from '../../images/clock.png'
export default function Reward() {
  const activeWishlist = () => {
    document.getElementById("icon-wishlist").classList.add("in-wishliste");
  }
  return (
    <>

      <div className='podcast-banner-slidewrap' style={{ margin: "0" }}>

        <div className='podcast-banner-slide learning-home reward-home'>
          <div className='container h-100'>
            <div className='box'>
              <div className='boxCnt'>
                <h3>alone we can do so little. together we can do so much.</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Adipiscing eleifend nunc integer duis sed elit amet quam mauris. Sed ipsum massa ullamcorper et faucibus praesent.</p>
                <a href="#">Donate</a>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='container mt-4'>
        <div className='reward_box'>
          <div className='image'>
            <img src={rr1} />
          </div>
          <div className='rightBox'>
            <div className='rightBoxflex'>
              <div className='content'>
                <h6>Title</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>

              <div className='favourite'>
                <div class="icon-wishlist" id='icon-wishlist' onClick={activeWishlist}></div>
              </div>
            </div>
            <div className='clock'>
              <img src={rr3} className='mr-2'/>5 d
            </div>
          </div>
        </div>
        <div className='reward_box sndone'>
          <div className='image'>
            <img src={rr2} />
          </div>
          <div className='rightBox'>
            <div className='rightBoxflex'>
              <div className='content'>
                <h6>Title</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>

              <div className='favourite'>
                <div class="icon-wishlist" id='icon-wishlist' onClick={activeWishlist}></div>
              </div>
            </div>
            <div className='clock'>
              <img src={rr3} className='mr-2'/>5 d
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
