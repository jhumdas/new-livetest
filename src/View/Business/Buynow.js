import React from 'react';
import bought_company3 from '../../images/bought_company3.png';
import { Link } from 'react-router-dom';

export default function Buynow() {
    return (
        <>
            <section className='buynow_page'>
                <div className='container'>
                    <div className='buy_btn_arw'>
                        <Link to="/stockpage">
                            <div className='byu' style={{ display: "flex", alignItems: 'center' }}>
                                <i class="fa-solid fa-chevron-left"></i>
                                <h4 className='buy' style={{ marginLeft: "20px" }}>Buy</h4>
                            </div>
                        </Link>
                    </div>

                    <div className='company_prvw_imgtxt_buy'>
                        <div className='comapny_prvw'>
                            <div className='companname_txt'>
                                <div className='company_img_by'>
                                    <img src={bought_company3} alt="/" />
                                </div>

                                <div className='company_txt_by'>
                                    <p className='comapny_name_by'>Lorem Ipsum</p>
                                    <p className='company_stck_by'>Stock</p>
                                </div>
                            </div>

                            <div className='cmpny_prvw_txt'>
                                <Link to="/preview">
                                    <div className='prvw' style={{ display: "flex", alignItems: 'center' }}>
                                        <h4 className='buy' style={{ marginRight: "20px" }}>Preview Buy</h4>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='buy_now_sacsh_main'>
                        <div className='buy_now_csh_main'>
                           

                        </div>
                        <div className='blance_csh_byt_txt'>
                            <p className='blance_csh_byt_pp'>balance cash available $969,988,01</p>
                        </div>
                    </div>

                    <div className='buy_now_csh_btn'>
                        <Link to="/preview"className='btn_buy_csh'>Buy Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
