import React,{useState} from 'react'
import rr1 from '../../images/rr2.png'
import rr2 from '../../images/rr1.png'
import rr3 from '../../images/clock.png'
import { Link } from 'react-router-dom'
export default function Reward() {
  const [isActive, setActive] = useState(false);
  const loop=[
    {
      "img":rr1
    },
    {
      'img':rr2
    }
  ];
    
  const activeWishlist = () => {
    // document.getElementById("icon-wishlist").classList.add("in-wishliste");
    setActive(!isActive);
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
        {loop.map((item,index) => {
          return (
            <div className='reward_box' style={index == loop.length - 1 ? { backgroundColor: "#FFDCE2" } : {}}>
              <Link to="/reward-single"><div className='image'>
                <img src={item.img} />
              </div></Link>
              <div className='rightBox'>
                <div className='rightBoxflex'>
                  <div className='content'>
                    <h6>Title</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>

                  <div className='favourite' >
                    <div class="icon-wishlist" id='icon-wishlist'  className={isActive ? "icon-wishlist in-wishlist" : ' icon-wishlist'} onClick={activeWishlist}></div>
                  </div>
                </div>
                <div className='clock'>
                  <img src={rr3} className='mr-2' />5 d
                </div>
              </div>
            </div>
          )
        }

        )}


      </div>
    </>
  )
}
