import React from 'react'
import v from '../../images/Rectangle 507.png'
import a from '../../images/mdi_cc-outline.png'
import b from '../../images/material-symbols_video-settings.png'
import g from '../../images/video-icon.png'
import r from '../../images/bi_downloadwhite.png'
import m from '../../images/iconoir_sound-high.png'
import n from '../../images/charm_screen-maximise.png'
import p from '../../images/leftArrow.png'
import q from '../../images/rgtArrow.png'
export default function VideoScreen() {
    return (
        <>
            <div className='video-screen single-movie'>
                <div className='container'>
                    <div className='videowrap'>
                        <div><img src={v} style={{ width: "100%" }} /></div>
                        <div className='top'>
                            <div className='lftText'><i class="fa-solid fa-chevron-left mr-3"></i>Dora The Explorer</div>
                            <div className='rgtText'><img src={a} className=''/>subtitles <img src={b} className='' /></div>
                        </div>
                        <div className='middle'>
                            <div><img src={p} /></div>
                            <div><img src={g} /></div>
                            <div><img src={q} className='v-rgt-arrow'/></div>
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
                            Lorem ipsum dolor sit amet consectetur. Morbi pretium cras fringilla amet
                            platea lacinia. Nulla habitant nunc fusce hendrerit et molestie porttitor.
                            Arcu suspendisse accumsan ullamcorper ac. Amet semper mi dui volutpat dui
                            ut.<span>Read more</span>{" "}
                        </p>
                        <div className="song-details mb-3">
                            <p><strong>Releasing year :</strong>  2022</p>
                            <p> <strong>Cast & Crew :</strong> Sasha Toro , Kathleen Herles , Marc Weiner, Isabela Merced</p>
                            <p><strong>Audio & Subtitle :</strong>English</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
