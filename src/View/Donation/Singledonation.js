import React from 'react';
import { Link } from 'react-router-dom';
import flight_img from '../../images/flight_img.png'

export default function Singledonation() {
    return (
        <>
            <section className='singledonation'>
                <div className='container'>
                    <div className='singledonation_icon'>
                        <Link to="/">
                            <div className='donation_icon_txt_main' style={{ display: "flex", alignItems: "center" }}>
                                <i class="fa-solid fa-chevron-left"></i>
                                <p className='impct'>lorem is fighting</p>
                            </div>
                        </Link>

                    </div>

                    <div className='singledonation_book_bg_img'>
                        <div className='singledonation_book_img'>
                            {/* <img src={flight_img} alt="/" /> */}
                            <div className='singledonation_left_txt'>
                                <p className='singledonation_txt'>5 Days Left</p>
                            </div>
                        </div>
                        <div className='single_book_img_txt'>
                            <p className='single_txt_pp'>My lorem is fighting for her life and we need your support to save her from stage 4 cancer</p>
                        </div>
                    </div>

                    <div className='donation_icon_social_flx'>
                        <div className='donation_icon_social_flx_main'>
                            <Link to="/" className='whtsapp_txt_icon_btn'>
                                <i class="fa-brands fa-whatsapp"></i>
                                <p className='flight_icon_whts'>share via whatsapp</p>
                            </Link>

                            <Link to="/" className='whtsapp_txt_icon_btn fb_txt_icon_btn'>
                                <i class="fa-brands fa-facebook-f"></i>
                                <p className='flight_icon_whts'>share via whatsapp</p>
                            </Link>
                        </div>
                    </div>

                    <div className='donation_amount_hour_main'>
                        <div className='donation_amount_hour_bg'>
                            <div className='donation_amount_hour_bg_flx'>
                                <div className='donation_amount_hour_amnt_pp'>
                                    <p className='donation_amount_pp'>
                                        $ 5,80,765
                                    </p>

                                    <p className='donation_amount_raised_pp'>
                                    raised out of $60,00,000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
