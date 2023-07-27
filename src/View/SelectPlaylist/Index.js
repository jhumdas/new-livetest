import React from 'react'
import SelectPodcast from '../../Component/SelectPodcast'
import v from '../../images/Rectangle 446 (1).png'
import c from '../../images/lady.png'
import Playfooter from '../../Component/Playfooter'
export default function Index() {
    return (
        <>

            <section className='select-song selectpodcast-details'>
                <div className='container'>
                    <SelectPodcast image={v} name="Lorem ipsum dolor sit amet consectetur." Forsongtype={true} forSongName={true} queue={true} />

                    <table className='table table-responsive mt-4'>
                        <thead>
                            <tr>
                                <th>Track </th>
                                <th className='text-center'>Artist </th>
                                <th className='text-center'>Track </th>
                                <th className='text-right'>Duration </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                            <tr>
                                <td><div><img src={c}/><span>Lorem ipsum dolor sit</span></div></td>
                                <td className='text-center'>Maria Curtis &Zaire Curtis</td>
                                <td className='text-center'>Lorem ipsum</td>
                                <td className=''><div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><span className='h-vol' style={{ border: "1px solid #716E6", fontSize: "12px" }}>04 min 20 sec</span> <span className='icons'><i class="fa-regular fa-heart"></i></span>
                                    <span style={{ position: "relative" }} className='icons'><i class="fa-solid fa-ellipsis-vertical"></i>
                                    </span></div></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </section>
            <Playfooter/>

        </>
    )
}
