import React from 'react'
import d from '../../images/Rectangle 522.png';
import icon3 from '../../images/del.png';
export default function MyCourse() {
    return (
        <>

            <div className='dream-job course mt-3'>
                <h2 className='mb-3' style={{fontSize:"22px", fontWeight:"600"}}>My Course</h2>
                <div className='box'>
                    <div className='imge'>
                        <img src={d} />
                    </div>
                    <div className='popCourse-boxCnt'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                       
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                        <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                        
       <h4><strong>Total videos:</strong> 20</h4>
                    </div>
                </div>
                <div className='box mt-3'>
                    <div className='imge'>
                        <img src={d} />
                    </div>
                    <div className='popCourse-boxCnt'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                       
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                      
                        <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                     
                        <h4><strong>Total videos:</strong> 20</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
