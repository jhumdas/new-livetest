import React from 'react'
import p from '../../images/fontisto_google-play.png'
import a from '../../images/digiM.png'
export default function DigitalMoney() {
    return (
        <>
            <section className='digital-money'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='leftCnt'>
                                <h2>The SuperApp which helps you grow and make an impact.
                                </h2>
                                <p>A dedicated innovative digital platform which is open to all.  Our goal is to reshape the way we can all make a difference. We support businesses and individuals with exciting  opportunities to grow and make impact.
                                </p>
                                <a href="#">Download The App <img src={p} style={{ marginLeft: "15px" }} /></a>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className='rightImg'>
                                <img src={a} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
