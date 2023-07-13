import React from 'react'
import news_sld1 from '../../images/news_sld1.png';
import lcl_news11 from '../../images/lcl_news11.png';
// import lcl_news10 from '../../Images/lcl_news10.png'
// import lcl_news9 from '../../Images/lcl_news9.png'

function Index() {
    return (
        <>
            <section className='newsdetails'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-12">

                            <div className='newsdetails_start_text_main'>
                                <p className='newsdetails_start_text1'>Lorem ipsum dolor sit amet consectetur. Sed turpis nullam accumsan diam. Viverra erat enim eget ultrices quam sed.</p>
                                <p className='newsdetails_start_text2'>Lorem ipsum dolor sit amet consectetur. Lorem vulputate justo dictum rhoncus. Dui enim adipiscing sed est elit nibh. Et diam convallis et justo enim sed morbi. Turpis at consequat sodales nisi eget ut.</p>
                            </div>
                            <div className='newsdetails_image'>
                                <img src={news_sld1} alt='' />
                            </div>
                            <div className='newsdetails_start_text_main2'>
                                <p className='newsdetails_start_text3'>Lorem ipsum dolor sit amet consectetur. Feugiat et lobortis vulputate quis id quam. Non commodo egestas lorem ut elit facilisis. Id platea tellus mattis imperdiet. Nibh turpis aliquam a pellentesque placerat. Eu dolor volutpat ac tortor consectetur id. Tortor adipiscing etiam augue mattis laoreet turpis. Risus eu dolor velit odio id pellentesque hac nec odio. Tristique at lobortis morbi erat viverra elit. Ipsum cursus nec ac neque urna at augue.</p>
                                <p className='newsdetails_start_text4'>Lorem ipsum dolor sit amet consectetur. Feugiat et lobortis vulputate quis id quam. Non commodo egestas lorem ut elit facilisis. Id platea tellus mattis imperdiet. Nibh turpis aliquam a pellentesque placerat. Eu dolor volutpat ac tortor conse</p>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                            <div className='news_details_local_brdr'>
                                <div className='news_detail_local_news_text'>
                                    <h4>Local News</h4>
                                </div>
                                <div className='news_details_local_img_txt1'>
                                    <div className='news_details_local_img1'>
                                        <img src={lcl_news11} alt='' />
                                    </div>
                                    <div className='news_details_local_txt_main'>
                                        <p className='news_details_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_details_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_details_local_img_txt1'>
                                    <div className='news_details_local_img1'>
                                        <img src={lcl_news11} alt='' />
                                    </div>
                                    <div className='news_details_local_txt_main'>
                                        <p className='news_details_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_details_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                                <div className='news_details_local_img_txt1'>
                                    <div className='news_details_local_img1'>
                                        <img src={lcl_news11} alt='' />
                                    </div>
                                    <div className='news_details_local_txt_main'>
                                        <p className='news_details_local_txt1'>Lorem ipsum dolor sit amet consectetur. Donec elit mauris a malesuada.</p>
                                        <p className='news_details_local_txt2'>Lorem ipsum dolor sit amet consectetur. Pharetra lacus magna placerat risus ultrices nunc est viverra enim. Elit et semper rhoncus id</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Index