import React, { useState } from 'react'
import a from '../../images/calender.png'
import b from '../../images/error.png'
import c from '../../images/rightarrow.png'
import d from '../../images/doc.png'
import { useSearch } from 'rsuite/esm/Picker'
export default function RewardSingle() {
  const [handleGiftcode,setHandleGiftcode]= useState(false);
  const handleClickGiftcode =()=>{
    setHandleGiftcode(true);
    document.getElementById('giftCode').style.display='none';
  }
  return (
    <>

      <div className='reward_single'>
        <div className='reward_singleBG'> </div>
        <div className='reward_single_box_wrap'>
          <div className='reward_single_box'>
            <h3>flat 100% off*</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
            <div className='giftCode' id="giftCode">
              <div className='codeBox'>
                <h6>Code:<strong>000*******00</strong> </h6>
                <a href="#" onClick={handleClickGiftcode}>Show</a>
              </div>
              <div className='giftBtn'>Gift Now</div>
            </div>
            {handleGiftcode&&<div className='giftCode'>
              <div className='codeBox'>
                <h6>Code:<strong>000000000000</strong> </h6>
            
              </div>
              <div className='giftBtn'>Copy</div>
            </div>}
          </div>
          <div className='reward_single_boxBottom'>
            <div className='offer-box'>
              <img src={a} />
              <h6>expires on 21 may, 2023, 12:00am</h6>
            </div>
            <div className='offer-box-wrap'>
              <div className='offer-box'>
                <div><img src={b} /></div>
                <h6>offer details</h6>
              </div>
              <div><img src={c} className='arrow'/></div>
            </div>
            <div className='offer-box-wrap'>
              <div className='offer-box' style={{marginBottom:"0"}}>
                <div><img src={d} /></div>
                <h6>about lorem ipsum</h6>
              </div>
              <div><img src={c} className='arrow'/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
