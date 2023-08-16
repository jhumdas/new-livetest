import React, { useState } from 'react'
import a from '../../images/arrowinput.png'
export default function DonateModal({ closeModal }) {
  const [wish, setwish]= useState(false);
  const handleWishBox=()=>{
    setwish(true);
    document.getElementById('btnnOne').style.display="none";
  }
  return (
    <>
      <div className='Buycourse'>

        <div className=' DonateModal'>


          <h3>you are donating</h3>
          <h4 className='mt-4'>most people have donated $1000</h4>
          <div className='boxwrap'>
            <div className='box'>
              <h3>&50</h3>
              <h4>per month</h4>
            </div>
            <div className='box'>
              <h3>&50</h3>
              <h4>per month</h4>
            </div>
            <div className='box'>
              <h3>&50</h3>
              <h4>per month</h4>
            </div>
          </div>
          <div> <a href="#" className='btnnOne' id="btnnOne" onClick={handleWishBox}>other</a></div>
          {wish&&<div className='donate-as-ur-wish'>
            <h3 className='text-left'>donate as you wish</h3>
            <div className='amountInput'>
              <input type="text" placeholder='enter amount' />
              <div className='icon'>
                <img src={a} />
              </div>
            </div>
          </div>}
          <div><a href="#" className='btnnTwo' onClick={() => { closeModal(false) }}>cancel</a></div>
        </div>
      </div>

    </>
  )
}
