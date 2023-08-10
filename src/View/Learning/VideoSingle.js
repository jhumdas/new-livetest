import React from 'react'
import v from '../../images/course.png'
import a from '../../images/Certificate-PNG-Background-Image 1.png'
import x from '../../images/images (5) 1.png'
import lock from '../../images/lock.png'
import b from '../../images/material-symbols_video-settings.png'
import g from '../../images/video-icon.png'
import r from '../../images/bi_downloadwhite.png'
import m from '../../images/iconoir_sound-high.png'
import n from '../../images/charm_screen-maximise.png'
import p from '../../images/leftArrow.png'
import q from '../../images/rgtArrow.png'
import vv from '../../images/Rectangle 542.png'
import xx from '../../images/video-icon.png'
export default function VideoSingle() {
    const loop =[1,2,3,4,5,6];
    return (
        <>
            <section className='videoSinglepage'>
                <div className='videowrap'>
                    <div className='video'><img src={v} style={{ width: "100%" }} /></div>
                    <div className='top'>
                        <div className='lftText ml-3'>
                            <h3><i class="fa-solid fa-chevron-left mr-3"></i>Course Preview</h3>
                            <h5 className=''>Relational Database Design</h5>
                        </div>

                        <div className='rgtText'> <img src={b} className='' /></div>
                    </div>
                    <div className='middle'>
                        <div><img src={p} /></div>
                        <div><img src={g} /></div>
                        <div><img src={q} className='v-rgt-arrow' /></div>
                    </div>
                    <div className='bottom'>
                        <div className="">
                            <img src={g} />
                        </div>
                        <h6>00:00</h6>
                        <div style={{ maxWidth: "70%", width: "100%" }}><input type="range" style={{ width: "100%", height: "9px" }} className='bigrange'></input></div>
                        <h6>00:35:20</h6>
                        <div><img src={r} /></div>
                        <div><img src={m} /></div>
                        <div><img src={n} /></div>
                    </div>
                </div>
                <div className="episodeDetails mt-4">
                    <h5>Description</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper turpis consequat rutrum lobortis. Platea vitae leo dolor in. Augue turpis massa neque pulvinar vel porttitor velit. Venenatis turpis arcu non suspendisse.
                    </p>
                </div>
                <div className="episodeDetails mt-4">
                    <h5>Download Resource</h5>
                    <div className='download-resource'>
                        <div className='image'>
                            <div style={{ position: "relative" }}>
                                <img src={a} />
                                <div className='ForDownload'>
                                    <img src={lock} />
                                    <h6>Download</h6>
                                </div>
                            </div>
                        </div>
                        <div className='image'>
                            <div style={{ position: "relative" }}>
                                <img src={x} />
                                <div className='ForDownload'>
                                    <img src={lock} />
                                    <h6>Download</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    {loop.map((item,index)=>{
                        return(
                            <div className='others-video'>
                            <div>
                                <div style={{ position: "relative" }}>
                                    <img src={vv} />
                                    <div className='videoicon'>
                                        <img src={xx} />
    
                                    </div>
                                </div>
                            </div>
                            <div className='pl-3'>
                                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                                <h6>Lesson 1</h6>
                                <h6>00:50:20</h6>
                            </div>
                        </div>
                        )
                    }

                    )}
                   
                </div>
            </section>

        </>
    )
}
