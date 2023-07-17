import React from 'react'
import a from '../../images/Frame (1).png'
import b from '../../images/Frame2.png'
import c from '../../images/Frame3.png'
export default function Transaction() {
    return (
        <>

            <section className='transaction'>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='topPart'>
                            <div className='row' style={{ alignItems: "center" }}>
                                <div className='col-md-8 col-12'>
                                    <h2>Safe & Convenient<br /> transaction</h2>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                            </div>
                        </div>

                        <div className='bottomPart'>
                            <div className='row'>
                                <div className='col-md-4 col-12'>
                                    <div>
                                        <img src={a}/>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div>
                                        <img src={b}/>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div>
                                        <img src={c}/>
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
