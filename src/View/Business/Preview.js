import React from 'react'
import { Link } from 'react-router-dom';
import bought_company3 from '../../images/bought_company3.png';
export default function Preview() {
    const loop = [1, 2, 3]
    return (
        <>
            <section className='preview_page'>
                <div className='container'>
                    <div className='buy_btn_arw'>
                        <Link to="/buynow">
                            <div className='byu' style={{ display: "flex", alignItems: 'center' }}>
                                <i class="fa-solid fa-chevron-left"></i>
                                <h4 className='buy' style={{ marginLeft: "20px" }}>Preview</h4>
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
                           
                            <div className='prvw_mrkt_prc_main'>
                                <div className='prvw_mrkt_prc'>
                                    <h4 className='mrkt_prc'>Market price</h4>
                                    <p className='mrkt_prc_pp'>$80.08</p>
                                </div>
                                <div className='prvw_mrkt_prc'>
                                    <h4 className='mrkt_prc'>Numbers of shares</h4>
                                    <p className='mrkt_prc_pp'>98.75687</p>
                                </div>
                            </div>
                            <div className='prvw_mrkt_prc_main'>
                                <div className='prvw_mrkt_prc'>
                                    <h4 className='mrkt_prc'>Amount</h4>
                                    <p className='mrkt_prc_pp'>$10,000.00</p>
                                </div>
                                <div className='prvw_mrkt_prc'>
                                    <h4 className='mrkt_prc'>Trading fee</h4>
                                    <p className='mrkt_prc_pp'>$50,00</p>
                                </div>
                            </div>

                            <div className='prvw_mrkt_prc_main' style={{ border: "none" }}>
                                <div className='prvw_mrkt_prc'>
                                    <h4 className='mrkt_prc'>Total cost</h4>
                                    <p className='mrkt_prc_pp'>$10,050.00</p>
                                </div>
                            </div>
                             
                            
                        </div>
                        
                    </div>

                    <div className='buy_now_csh_btn'>
                        <Link to="/payment"className='btn_buy_csh'>Continue</Link>
                    </div>

                </div>
            </section>
        </>
    )
}
