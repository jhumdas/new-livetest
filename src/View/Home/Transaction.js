import React from 'react'
import a from '../../images/OnePlus 8 Pro.png'
import b from '../../images/OnePlus 888 Pro.png'
import c from '../../images/OnePlus 8999 Pro.png'
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
                                    <div className='bb-box'>
                                        <div className='cnt'>
                                            <h4>Grow Your Business</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>
                                        <img src={a} className='firstImg' />
                                    </div>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='bb-box' style={{flexDirection:"column"}}>
                                        <img src={b} style={{height:"286px"}}/>
                                        <div className='cnt' style={{display:"flex"}}>
                                          
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            <h4>Grow your communities</h4></div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='bb-box'>
                                        
                                        <img src={c} className='firstImg'/>
                                        <div className='cnt'>
                                            <h4>Enhance Your Impact</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>
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
