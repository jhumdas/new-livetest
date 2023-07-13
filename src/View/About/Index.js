import React from 'react';
// import '../About/About.css';
import mission_dashed from '../../images/mission_dashed.png';
import mission_img from '../../images/mission_img.png';
import about_middle from '../../images/about_middle.png';
import about_end from '../../images/about_end.png';
import about_end_img1 from '../../images/about_end_img1.png';
import about_end_img2 from '../../images/about_end_img2.png'


function Index() {
    return (
        <>
            {/* Our Mission section start */}
            <section className='about_mission'>
                <div className='container'>
                    <div className='our_mission'>
                        <h4 className='our_mission_heading'>
                            Our Mission
                        </h4>
                        <div className='mission_dashed_image'>
                            <img src={mission_dashed} alt="" />
                        </div>
                        <div className='mission_text'>
                            <p>Lorem Ipsum is simply dummy text of<br></br> the printing</p>
                        </div>
                        <div className='mission_image'>
                            <img src={mission_img} alt="" />
                        </div>
                        <div className='mission_heading_text'>
                            <h2>Lorem Ipsum is simply dummy</h2>
                        </div>
                        <div className='mission_heading_paragraph'>
                            <p>Lorem ipsum dolor sit amet consectetur. Elementum urna vitae non iaculis metus nunc consectetur sem pretium. Vestibulum pretium pretium ac quis in duis venenatis adipiscing. Et ut non mauris sem dui quam integer ac. Arcu ut mi aliquam posuere vitae neque. Hac ut tristique semper egestas. Nulla elementum posuere nullam facilisis dapibus pulvinar id egestas nisi. Sed feugiat vestibulum aenean turpis suspendisse nec lacinia arcu. Sapien quam senectus mauris etiam. At senectus etiam sapien facilisi elementum adipiscing erat non ut.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* our mission section end */}

            {/* About page middle section start */}
            <section className='about_middle'>
                <div className='container'>
                    <div className='row' style={{ alignItems: 'center' }}>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            <div className='about_middle_main'>

                                <p className='about_middle_lrm'>Lorem Ipsum is simply dummy text of the printing</p>
                                <p className='about_middle_lrm_text'>Lorem ipsum dolor sit amet consectetur. Elementum urna vitae non iaculis metus nunc consectetur sem pretium. Vestibulum pretium pretium ac quis in duis venenatis adipiscing. Et ut non mauris sem dui quam integer ac. Arcu ut mi aliquam posuere vitae neque. Hac ut tristique semper egestas. Nulla elementum posuere nullam facilisis dapibus</p>

                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            <div className='about_middle_img_main'>
                                <div className='about_middle_img'>
                                    <img src={about_middle} alt='' />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About page middle section end */}
            <section className='about_end'>
                <div className='container'>
                    <div className='row' style={{ alignItems: 'center' }}>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            
                                <div className='about_end_img_phone'>
                                    <img src={about_end} alt='' />
                                </div>

                        
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-12'>
                            <div className='about_end_text'>
                                <h2 className='about_download'>
                                    Download Our<br></br> Application Now
                                </h2>
                                <p className='about_download_lrm'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className='about_end_img'>
                                    <div className='about_end_img1'>
                                        <img src={about_end_img1} alt='' />
                                    </div>
                                    <div className='about_end_img2'>
                                        <img src={about_end_img2} alt='' />
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </section>
            {/* About page end section start  */}

            {/* About page end section end  */}
        </>
    )
}

export default Index