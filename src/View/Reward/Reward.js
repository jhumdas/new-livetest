import React,{useState} from 'react'
import rr1 from '../../images/rr2.png'
import rr2 from '../../images/rr1.png'
import rr3 from '../../images/clock.png'
import { Link } from 'react-router-dom'
import RewardCard from './RewardCard'
export default function Reward() {
  const [isActive, setActive] = useState(false);
  const loop=[
    {
      "img":rr1
    },
    {
      'img':rr2
    },
    {
      'img':rr1
    },{
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


      <div className='container mt-4 reward-card-css' >
        {loop.map((item,index) => {
          return (
        <RewardCard key={index}  index={index} item={item} />
          )
        }

        )}


      </div>
    </>
  )
}
