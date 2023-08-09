import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import a from '../../images/Rectangle 517.png';
import b from '../../images/Rectangle 521.png';
import c from '../../images/Rectangle 519.png';
import d from '../../images/Rectangle 542.png';
import f from '../../images/heroicons_language-solid.png';
import g from '../../images/radix-icons_update.png';
import videoIcon from '../../images/video-icon.png'
import i from '../../images/ph_video.png'
import j from '../../images/ph_certificate.png'
import k from '../../images/akar-icons_file.png'
import l from '../../images/fluent-mdl2_articles.png'
import m from '../../images/clarity_mobile-line.png'
import bb from '../../images/Ellipse 323.png'
import r from '../../images/bxs_star.png'
import s from '../../images/la_user-tag.png'
import t from '../../images/mingcute_group-fill.png'
import w from '../../images/my.png'
import BuyCourseModal from '../../Component/Modal/BuyCourseModal';
export default function SingleCourse() {
    const[modal,setModal]= useState(false);
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
                                <a href="#" className='courseBtn' onClick={()=>{setModal(true)}}>Buy This course</a>
                                <a href="#" className='course-fee-btn'>$ 500</a>
                            </div>
                        </div>
                        <div className='rgtImg'>
                        <Link to="/videosingle-page"><img src={d} />
                            <div className='videoIcon'><img src={videoIcon} /></div></Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className='you-learn'>
                <h4>What you‘ll learn </h4>
                <div className='wrap'>
                    <ul className='lftSide'>
                        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
                        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                    <ul className='rgtSide'>
                        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
                        <li><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>
            <div className='you-learn mt-3' style={{ border: "0", padding: "0" }}>
                <h4>This Course Including </h4>
                <div className='wrap'>
                    <ul className='lftSide'>
                        <li><img src={i} />12 total hours on-demand video</li>
                        <li><img src={j} />certificate of completion</li>
                        <li><img src={m} />access on mobile, desktop, and tV</li>
                    </ul>
                    <ul className='rgtSide'>
                        <li><img src={k} />support files</li>
                        <li><img src={l} />2 articles</li>
                    </ul>
                </div>
            </div>
            <div className='you-learn mt-3' style={{ border: "0", padding: "0" }}>
                <h4>Requirement</h4>
                <ul className='list'>
                    <li>Lorem ipsum dolor sit amet consectetur. Eget consequat diam orci leo at duis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur. Eget consequat diam orci leo at duis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur. Eget consequat diam orci leo at duis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur. Eget consequat diam orci leo at duis.</li>
                </ul>
            </div>

            <div className='you-learn mt-3' style={{ border: "0", padding: "0" }}>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Ac in non adipiscing sodales mauris consequat odio blandit sit. Fermentum aliquam vitae sagittis velit mauris netus morbi. Sed aliquam sit metus scelerisque. Ut tristique purus dignissim platea at.</p>
                <p>Lorem ipsum dolor sit amet consectetur. Ac in non adipiscing sodales mauris consequat odio blandit sit.</p>
                <a href="#" className='moreBtn'>Show more</a>
            </div>

            <div className='you-learn mt-3' style={{ border: "0", padding: "0" }}>
                <h4>Description</h4>
                <a className='moreBtn mb-2'>Chance Torff</a>
                <h6>IT Software Consultant</h6>
                <div className='wrap instructor-detail'>
                    <ul className='instructor'>
                       <Link to="/instructor"> <img src={bb} /></Link>
                    </ul>
                    <ul className='ml-4'>
                        <li><img src={r} />4.4 Instructor Rating</li>
                        <li><img src={s} />20,000 Reviews</li>
                        <li><img src={t} />12,000 Students</li>
                        <li><img src={w} />3 Courses</li>
                    </ul>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Pulvinar a feugiat et sed et consectetur sem libero. Suspendisse nisl facilisis vestibulum enim enim ultrices non. Sem maecenas at blandit tortor sed tortor libero at quisque.</p>
            </div>

            <div className="reviewPart you-learn mt-3" style={{ border: "0", padding: "0" }}>
                <h4>Student Feedback</h4>

                <div className="mt-3">
                    <div className="ratingBox">
                        <span>5</span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span className="ratingBar" />
                    </div>
                    <div className="ratingBox">
                        <span>4</span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span className="ratingBar" style={{ width: "30%" }} />
                    </div>
                    <div className="ratingBox">
                        <span>3</span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span className="ratingBar" style={{ width: "20%" }} />
                    </div>
                    <div className="ratingBox">
                        <span>2</span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span className="ratingBar" style={{ width: "10%" }} />
                    </div>
                    <div className="ratingBox">
                        <span>1</span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span className="ratingBar" style={{ width: "5%" }} />
                    </div>
                </div>
            </div>
            <div className='give-ur-thought'>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                    placeholder='Write About Your thought'
                />
                <a href="#" className='submitBtn'>Submit</a>
            </div>
            <div className='feedback'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='singleBox'>
                            <div className='box'>
                                <img src={bb} />
                                <div className='cnt'>
                                    <h5>Jocelyn Press</h5>
                                    <h6><span className='mr-2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>4.0</h6>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. At sollicitudin consequat arcu in nisi. Vitae quam suspendisse lorem lorem enim augue quam purus morbi. Nulla et lacus dapibus fringilla vel.</p>
                            <a href="#">Show more</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='singleBox'>
                            <div className='box'>
                                <img src={bb} />
                                <div className='cnt'>
                                    <h5>Jocelyn Press</h5>
                                    <h6><span className='mr-2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>4.0</h6>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. At sollicitudin consequat arcu in nisi. Vitae quam suspendisse lorem lorem enim augue quam purus morbi. Nulla et lacus dapibus fringilla vel.</p>
                            <a href="#">Show more</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='singleBox'>
                            <div className='box'>
                                <img src={bb} />
                                <div className='cnt'>
                                    <h5>Jocelyn Press</h5>
                                    <h6><span className='mr-2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>4.0</h6>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. At sollicitudin consequat arcu in nisi. Vitae quam suspendisse lorem lorem enim augue quam purus morbi. Nulla et lacus dapibus fringilla vel.</p>
                            <a href="#">Show more</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='singleBox'>
                            <div className='box'>
                                <img src={bb} />
                                <div className='cnt'>
                                    <h5>Jocelyn Press</h5>
                                    <h6><span className='mr-2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>4.0</h6>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. At sollicitudin consequat arcu in nisi. Vitae quam suspendisse lorem lorem enim augue quam purus morbi. Nulla et lacus dapibus fringilla vel.</p>
                            <a href="#">Show more</a>
                        </div>
                    </div>
                </div>
                <a href="#" className='feedbackBtn mt-3'>Show more feedback</a>
            </div>

            <section className='popular-course mt-2'>
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

            {modal&&<BuyCourseModal closeModal={setModal}/>}

        </>
    )
}
