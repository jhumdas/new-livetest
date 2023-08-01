import React from 'react'
import h from '../images/Rectangle 443.png'
import f from '../images/carbon_rewind-10.png'
import i from '../images/carbon_forward-10.png'
import s from '../images/fluent_speaker-2-28-regular.png'
import b from '../images/openmoji_share.png'
export default function Playfooter() {
    return (
        <>
            <div className='play-footer'>
                <input type="range" style={{ width: "100%", height: "9px" }} className='bigrange'></input>
                <div className='play-footer-wrap'>
                    <div className='container'>
                        <div className='row' style={{ alignItems: "center" }}>
                            <div className='col-lg-3 col-md-3 col-12'>
                                <div>
                                    <div className='episode'>
                                        <div className='img-part' style={{ boxShadow: 'none', padding: "0", width: "63px", height: "58px" }}>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt' style={{ paddingLeft: "10px" }}>
                                            <div className=''>
                                                <h6>Lorem ipsum dolor sit </h6>
                                                <div className='Movietype' style={{ margin: "4px 0" }}><span style={{ fontSize: "14px" }}>10 min</span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-5 col-12'>
                                <div className='middle-part'>
                                    <div>
                                        <img src={f} />
                                    </div>
                                    <div className='c-forward'><i class="fa-solid fa-backward-step"></i></div>
                                    <div className='playBtn'><i class="fa-solid fa-circle-play"></i></div>
                                    <div className='c-rewind'><i class="fa-solid fa-forward-step"></i></div>
                                    <div>
                                        <img src={i} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>

                                <div className='right-part'>
                                    <span>1:25 / 10:00</span>
                                    <span className='h-vol'>Audio: High</span>
                                    <span><img src={s} /></span>
                                    <input color='red' type="range" style={{ width: "99px", height: "9px" }}></input>
                                    <span><img src={b} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
