import React from 'react'

export default function DonateModal({closeModal}) {
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
          <div> <a href="#" className='btnnOne'>other</a></div>
          <div><a href="#"  className='btnnTwo' onClick={()=>{closeModal(false)}}>cancel</a></div>
        </div>
      </div>

    </>
  )
}
