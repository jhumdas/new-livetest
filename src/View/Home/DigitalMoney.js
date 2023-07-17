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
                                <h2>The Next Big Thing<br/>
                                    in Digital Money<br/>
                                    Transfer</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#">Download The App <img src={p} style={{marginLeft:"15px"}}/></a>
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
