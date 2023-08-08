import React from 'react'
import d from '../../images/Rectangle 522.png';
import icon3 from '../../images/del.png';
export default function CourseCart() {
    return (
        <>

            <div className='row mt-3'>
                <div className='col-lg-9 col-md-9 col-12'>
                    <div className='dream-job course'>
                        <div className='box'>
                            <div className='imge'>
                                <img src={d} />
                            </div>
                            <div className='popCourse-boxCnt'>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                    <div className="">
                                        <a href="">
                                            <img
                                                src={icon3}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                <h5><strong>By Angel Levin</strong></h5>
                                <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                <h3>$500</h3>
                            </div>
                        </div>
                        <div className='box mt-3'>
                            <div className='imge'>
                                <img src={d} />
                            </div>
                            <div className='popCourse-boxCnt'>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                    <div className="">
                                        <a href="">
                                            <img
                                                src={icon3}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                <h5><strong>By Angel Levin</strong></h5>
                                <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                <h3>$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className='cart-amount'>
                        <h4>Total Amount </h4>
                        <h2>$1498</h2>
                        <a href="#" className='submitBtn'>Checkout</a>
                    </div>
                </div>
            </div>

        </>
    )
}
