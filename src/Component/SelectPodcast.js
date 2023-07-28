import React, { useState } from 'react'
import h from '../images/Rectangle 443.png'
import p from '../images/gridicons_play.png'
import s from '../images/bi_download.png'
import n from '../images/ph_playlist-light.png'
import g from '../images/openmoji_share.png'
import x from '../images/subway_add-playlist.png'
import videoIcon from '../images/video-icon.png'
export default function SelectPodcast(props) {
    const {Forsongtype=false,forSongName=false,forPodName=false,ForPodtype=false,queue=false,name,image}=props;
    const [smallPop, setSmallPop] = useState(false);
    const toggolePop = () => {
        setSmallPop(!smallPop);
    }
    return (
        <>

            <div className='wrap'>
                <div className='img-part'>
                    <img src={image} />
                    <div className='videoIcon'><img src={videoIcon}/></div>
                </div>
                <div className='cnt-part'>
                    <h3>{name}</h3>
                    {forPodName&&<h6>50K  Listener</h6>}
                    {Forsongtype&&<div className='Movietype'><span>2023</span><span className='v-line'></span> <span className='h-vol' style={{border:"1px solid #716E6",fontSize:"12px"}}>04 min 20 sec</span></div>}
                    {forSongName&&<h6>Artist :Ann Culhane & Marcus Philips</h6>}
                    {ForPodtype&&<div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>}

                    <div className='Movietype'>
                        <span className='icons'><i class="fa-regular fa-heart"></i></span>
                        <span className="icons" style={{ position: "relative" }} onClick={toggolePop}><i class="fa-solid fa-ellipsis-vertical"></i>
                            {smallPop && <div className='small-pop'>
                                <h5><img src={g} />Share</h5>
                                <h5><img src={s} />Download</h5>
                                <h5><img src={n} />Add to Playlist</h5>
                                {queue&&<h5><img src={x} />Add to Queue</h5>}
                            </div>}
                        </span>
                    </div>

                    <a
                        className="shop_bg_btn mt-3"
                        href=""
                        style={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <img src={p} className='mr-2' /> Play
                    </a>

                </div>

            </div>
        </>
    )
}
