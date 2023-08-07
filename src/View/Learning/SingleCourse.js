import React from 'react'
import a from '../../images/Rectangle 517.png';
import b from '../../images/Rectangle 521.png';
import c from '../../images/Rectangle 519.png';
import d from '../../images/Rectangle 542.png';
import f from '../../images/heroicons_language-solid.png';
import g from '../../images/radix-icons_update.png';
import videoIcon from '../../images/video-icon.png'
export default function SingleCourse() {
    return (
        <>

            <div className='podcast-banner-slidewrap'>

                <div className='single-course'>
                    <div className='box'>
                        <div className='boxCnt'>
                            <h3>Relational Database Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                            <h6><span style={{ color: "#FF3A44" }}>Created By:</span> Angel Levin</h6>
                            <h6>
                                4.9
                                <span>
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </span>
                                ( 50k) 20,000 students
                            </h6>
                            <h6><img src={f} />English</h6>
                            <h6><img src={g} />Update On: 06 June 2022 </h6>

                            <div>
                                <a href="#" className='courseBtn'>Buy This course</a>
                                <a href="#" className='course-fee-btn'>$ 500</a>
                            </div>
                        </div>
                        <div className='rgtImg'>
                            <img src={d} />
                            <div className='videoIcon'><img src={videoIcon} /></div>
                        </div>
                    </div>
                </div>

            </div>

<div className='you-learn'>
    <h4>What you‘ll learn </h4>
    <ul>
        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    <ul>
        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
</div>
            <section className='popular-course'>
                <h2 className='popular-headline'>Show more Courses</h2>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='box'>
                            <img src={a} />
                            <div className='popCourse-boxCnt'>
                                <h4>Designing Course</h4>
                                <h5>Phillip Press</h5>
                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                <h3>$500</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='box'>
                            <img src={b} />
                            <div className='popCourse-boxCnt'>
                                <h4>Java Script</h4>
                                <h5>Phillip Press</h5>
                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                <h3>$500</h3>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='box'>
                            <img src={c} />
                            <div className='popCourse-boxCnt'>
                                <h4>Digital Marketing</h4>
                                <h5>Phillip Press</h5>
                                <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                <h3>$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
