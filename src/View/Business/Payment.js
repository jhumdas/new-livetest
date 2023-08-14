import React from 'react';
import bought_company3 from '../../images/bought_company3.png';
import Allura_Celebrations from '../../images/Allura_Celebrations.png'

export default function Payment() {
    return (
        <>
            <section className='business_companypayment_name_img'>
                <div className='container'>
                    <div className='busimess_companypayment_img_txt'>
                        <div className='companypayment_img'>
                            <img src={bought_company3} alt="/" />
                        </div>
                        <div className='companypayment_txt'>
                            <p className='companypayment_txt_pp'>lorem ipsum</p>
                            <p className='companypayment_txt_stck'>Stock</p>
                        </div>
                    </div>

                    <div className='busimess_companypayment_img_main'>
                        <div className='busimess_companypayment_img'>
                            <img src={Allura_Celebrations} alt="/" />
                        </div>
                        <div className='busimess_companypayment_img_txt_main'>
                            <p className='busimess_companypayment_prc'>
                                $10000
                            </p>

                            <p className='busimess_companypayment_rcvd'>
                                Buy order received!
                            </p>

                            <p className='busimess_companypayment_opns_txt'>
                                Your order has been received and will be executed as soon as the market opens
                            </p>
                        </div>
                    </div>

                    <div className='business_paymnt_prtfl_stck'>
                        <a href="#" className='business_paymnt_prtflo'>View my portfolio</a>
                        <a href="#" className='business_paymnt_stcko'>Back to lorem ipsum stok</a>
                    </div>

                </div>
            </section>
        </>
    )
}
