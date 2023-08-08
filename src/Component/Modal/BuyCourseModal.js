import React from 'react'
import a from "../../images/Rectangle 542.png"
import b from '../../images/fluent_cart-20-regular.png'
export default function BuyCourseModal({closeModal}) {
  return (
    <>

      <div className='Buycourse'>
       
        <div className='BuycourseModal'>
        <a href="#" className='close' onClick={()=>{closeModal(false)}}><i class="fa-solid fa-xmark"></i></a>
        
          <div className='left'>
            <span className='tick'><i class="fa-solid fa-check"></i></span>
            <div className='video'>
              <img src={a}/>
            </div>
          </div>
          <div className='rgt'>
            <h3>Relational Database Design</h3>
            <h6><span style={{ color: "#FF3A44" }}>Created By:</span> Angel Levin</h6>
            <a href="/course-cart" className='submitBtn mt-3'>Add to cart <img src={b}/></a>
          </div>
        </div>
      </div>
    </>
  )
}
