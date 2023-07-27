import React, { useState } from 'react'
import s from '../images/ep_remove.png'
import n from '../images/ph_playlist-light.png'
import g from '../images/openmoji_share.png'
import c from '../images/lady.png'
export default function Playlist(props) {
    const [smallPop, setSmallPop] = useState(false);
    const toggolePop = () => {
        setSmallPop(!smallPop);
    }
    const { heart = false } = props;
    return (
        <>
            <div className='select-song'>
                <table className='table table-responsive mt-4'>
                    <thead>
                        <tr>
                            <th>Track </th>
                            <th className='text-center'>Artist </th>
                            <th className='text-center'>Album </th>
                            <th className='text-right'>Duration </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                    <span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span>
                                     <span className='icons'>{heart}</span>
                                <div>
                                     <span style={{ position: "relative" }} className='icons' onClick={toggolePop}><i class="fa-solid fa-ellipsis-vertical"></i></span>   
                                                    {smallPop && <div className='small-pop'>
                                    <h5><img src={g} />Share</h5>
                                    <h5><img src={s} />Remove Download</h5>
                                    <h5><img src={n} />Add to Playlist</h5>

                                </div>}
                                </div>
                                </div>
                                </td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                        <tr>
                            <td><div><img src={c} /><span>Lorem ipsum dolor sit</span></div></td>
                            <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                            <td className='text-center'>Lorem ipsum</td>
                            <td className=''><div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}><span className='h-vol' style={{ border: "1px solid #716E6e", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'>{heart}</span>
                                <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                </span></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
