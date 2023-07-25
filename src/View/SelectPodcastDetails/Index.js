import React, { useState } from 'react'
import h from '../../images/Rectangle 443.png'
import p from '../../images/gridicons_play.png'
import d from '../../images/bi_download.png'
import f from '../../images/Ellipse 210.png'
import i from '../../images/Ellipse 211.png'
export default function Index() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>

            <section className='selectpodcast-details'>
                <div className='container'>
                    <div className='wrap'>
                        <div className='img-part'>
                            <img src={h} />
                        </div>
                        <div className='cnt-part'>
                            <h3>Horror Podcast</h3>
                            <h6>50K  Listener</h6>
                            <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>

                            <div className='icons Movietype'>
                                <span><i class="fa-regular fa-heart"></i></span>
                                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
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
                    <div className='mt-5'>
                            <div className='episode_choice_list'>
                                <button
                                    className={toggleState === 1 ? "shop_tab active_episode_tab" : "shop_tab"}
                                    onClick={() => toggleTab(1)}
                                >
                                    10 Episode
                                </button>
                                <button
                                    className={toggleState === 2 ? "shop_tab active_episode_tab" : "shop_tab"}
                                    onClick={() => toggleTab(2)}
                                >
                                    Details
                                </button>

                            </div>
                            <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >

                                <div className='episodeWrapper mt-4'>
                                    <div className='episode'>
                                        <div className='img-part'>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt'>
                                            <div className=''>
                                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                                                <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>
                                            </div>
                                            <div><img src={d} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='episode'>
                                        <div className='img-part'>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt'>
                                            <div className=''>
                                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                                                <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>
                                            </div>
                                            <div><img src={d} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='episode'>
                                        <div className='img-part'>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt'>
                                            <div className=''>
                                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                                                <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>
                                            </div>
                                            <div><img src={d} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='episode'>
                                        <div className='img-part'>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt'>
                                            <div className=''>
                                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                                                <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>
                                            </div>
                                            <div><img src={d} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='episode'>
                                        <div className='img-part'>
                                            <img src={h} />
                                        </div>
                                        <div className='cnt'>
                                            <div className=''>
                                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                                                <div className='Movietype'><span>Audio Book</span><span className='v-line'></span><span>English</span><span className='v-line'></span><span>Horror</span></div>
                                            </div>
                                            <div><img src={d} /></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div
                                className={toggleState === 2 ? "content  active-content" : "content"}
                            >

                                <div className='episodeDetails mt-4'>

                                    <h5>Description</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur. Morbi pretium cras fringilla amet platea lacinia. Nulla habitant nunc fusce hendrerit et molestie porttitor. Arcu suspendisse accumsan ullamcorper ac. Amet semper mi dui volutpat dui ut.<span>Read more</span> </p>
                                    <h5>Voice Artist</h5>
                                    <div className='d-flex'>
                                        <div className='mr-4'>
                                            <img src={f} />
                                            <h6>Maria Curtis</h6>
                                        </div>
                                        <div>
                                            <img src={i} />
                                            <h6>Zaire Curtis</h6>
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
