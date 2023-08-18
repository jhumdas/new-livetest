import React from 'react';
import airplane from '../../images/airplane.png'

export default function Index() {
    return (
        <>
            <section className='flightbook_main'>
                <div className='flight_book_bg'></div>
                <div className='container'>
                    <div className='flight_book_box'>
                        <div className='flight_img_txt'>
                            <div className='flight_img'>
                                <img src={airplane} alt='/' />
                            </div>
                            <p className='flighimg_txt'>Flight Booking</p>
                        </div>

                        <div className='flight_book_way'>
                            <div class="flight_way">
                                <div className='flight_input_txt'>
                                    <input type="radio" id="" name="crd" class="input-radio on" value="">
                                    </input>
                                </div>
                                <div className='flight_way_txt'>
                                    <p className='flight_way_txt_ppp'>One Way</p>
                                </div>
                            </div>
                            <div class="flight_way">
                                <div className='flight_input_txt'>
                                    <input type="radio" id="" name="crd" class="input-radio on" value="">
                                    </input>
                                </div>
                                <div className='flight_way_txt'>
                                    <p className='flight_way_txt_ppp'>Round Trip</p>
                                </div>
                            </div>
                        </div>

                        <div className='flight_form'>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
