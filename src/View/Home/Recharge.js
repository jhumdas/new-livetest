import React from 'react'
import a from '../../images/r1 (1).png'
import b from '../../images/r1 (2).png'
import c from '../../images/r1 (3).png'
import d from '../../images/r1 (4).png'
import e from '../../images/r1 (5).png'
export default function Recharge() {
    return (
        <>
            <section className='reacharge'>

                <div className='container'>
                    <h3>Recharge & Pay Bills on BUSHIDO.</h3>
                    <div className='wrapper'>
                        <div className='box'>
                            <div className='boximg'>
                                <img src={a} />
                            </div>
                            <div className='Cnt'>
                                <h5>Flight Booking</h5>
                                <h6>Lorem Ipsum is simply dummy</h6>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boximg'>
                                <img src={b} />
                            </div>
                            <div className='Cnt'>
                                <h5>Hotel Booking</h5>
                                <h6>Lorem Ipsum is simply dummy</h6>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boximg'>
                                <img src={c} />
                            </div>
                            <div className='Cnt'>
                                <h5>Recharge & Bill Pay </h5>
                                <h6>Lorem Ipsum is simply dummy</h6>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boximg'>
                                <img src={d} />
                            </div>
                            <div className='Cnt'>
                                <h5>Lorem</h5>
                                <h6>Lorem Ipsum is simply dummy</h6>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boximg'>
                                <img src={e} />
                            </div>
                            <div className='Cnt'>
                                <h5>Lorem</h5>
                                <h6>Lorem Ipsum is simply dummy</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
