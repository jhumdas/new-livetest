import React from 'react'
import single_product_1 from '../../images/single_product_1.png';
import single_product_2 from '../../images/single_product_2.png';
import single_product_3 from '../../images/single_product_3.png';
import single_product_4 from '../../images/single_product_4.png';
import best_selling_icon from '../../images/best_selling_icon.png';

export default function Index() {
    return (
        <>
            <section className='single_product'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-2 col-md-5 col-12'>
                            <div className='single_product_main'>
                                <div className='single_product_img'>
                                    <img src={single_product_1} alt="" />
                                </div>
                                <div className='single_product_img'>
                                    <img src={single_product_2} alt="" />
                                </div>
                                <div className='single_product_img'>
                                    <img src={single_product_3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-7 col-12'>
                            <div className='single_product_img_main'>
                                <div className='single_product_img_main1'>
                                    <img src={single_product_4} alt='/'></img>
                                    <div className='best_selling_product_icon'>
                                        <img src={best_selling_icon} alt='' />
                                    </div>
                                </div>
                                {/* <div className='best_selling_product_icon'>
                                    <img src={best_selling_icon} alt='' />
                                </div> */}
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-6 col-12'>
                            <div className='single_product_txt_details'>
                                <h3 class="single_product_txt_main_dtl">Here the Single product <br></br> Name</h3>
                            </div>
                            <div className="single_product_review">
                                <div class="single_product_review_star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div className="single_product_review_txt">(1.5K Reviews)</div>
                            </div>
                            <div className='single_product_rate_main'>
                                <div className='single_product_rate_txt1'>
                                    <h3>$ 100</h3>
                                </div>

                                <div className='single_product_rate_txt2'>
                                    <h3>$ 130</h3>
                                </div>

                            </div>
                            <div className='single_product_size'>
                                <h3 class="single_product_size">Size:</h3>
                                <div className='single_product_size_main'>
                                    <div className='single_product_size1'>
                                        <h5>M</h5>
                                    </div>
                                    <div className='single_product_size2'>
                                        <h5>L</h5>
                                    </div>
                                    <div className='single_product_size3'>
                                        <h5>XL</h5>
                                    </div>
                                    <div className='single_product_size4'>
                                        <h5>XXL</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='single_product_quantity_main'>
                                <h3 class="single_product_size">Quantity:</h3>
                            </div>
                            <div className='single_product_quantity'>
                                <div className="input-group-btn">
                                    <button className="btn btn-minus " >
                                        <i class="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control single_product_quantity_own" value="1"></input>
                                <div className="input-group-btn">
                                    <button className="btn btn-plus">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}