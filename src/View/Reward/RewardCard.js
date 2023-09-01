import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import rr3 from '../../images/clock.png'


function RewardCard({item,style}) {
    const [wishlistActive,setWishListActive] = useState(false)
  return (
    <div className='reward_box' style={{...style}} >
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
          <div class="icon-wishlist" id='icon-wishlist'  className={wishlistActive ? "icon-wishlist in-wishlist" : ' icon-wishlist'} onClick={()=>setWishListActive((prev)=>!prev)}></div>
        </div>
      </div>
      <div className='clock'>
        <img src={rr3} className='mr-2' />5 d
      </div>
    </div>
  </div>
  )
}

export default RewardCard
