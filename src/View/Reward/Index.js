import React, { useState } from 'react'
import c from '../../images/coin.png'
import m from '../../images/medical.png'
export default function Index() {
  const [modal,setModal]=useState(false);
  const medical = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <div className='rewrad'>
        <div className='rewrad-bg-img'>
          <div className='container'>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000</p>
          </div>
        </div>
      </div>

      <div className='total-balance-earned'>
        <div className='container'>
          <div className='top'>
            <h4>Total Balance Earned</h4>
            <h4><img src={c} className='mr-2' />$ 00.00</h4>
          </div>
          <div className='row grop-box'>
            {medical.map(() => {
              return (
                <div className='col-lg-3 col-md-4 col-12' onClick={()=>{
                  setModal(true)
                }}>
                  <div className='balance-earnedBox'>
                    <h5>Medical </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <img src={m} />
                    <h4>$ 00.00</h4>
                  </div>
                </div>
              )
            }

            )}

          </div>
        </div>
      </div>


      {modal &&<div className='Buycourse'>
        <div className='balance-earnedBox earnModal'>
          <div className='top'>
            <h5>Medical </h5>
            <h6>00 Aug 0000</h6>
          </div>
     
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          <img src={m} />
          <div className='mt-3'><a href="#" className='reddemBtn'>Redeem Now</a></div>
        </div>
      </div>}
    </>
  )
}
