import React, { useState } from 'react'
import h from '../../images/Rectangle 443.png'
import d from '../../images/bi_download.png'
import f from '../../images/Ellipse 210.png'
import i from '../../images/Ellipse 211.png'
import Playfooter from '../../Component/Playfooter'
import SelectPodcast from '../../Component/SelectPodcast'
import EpisodeDetails from '../../Component/EpisodeDetails'
export default function Index() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>

            <section className='selectpodcast-details'>
                <div className='container'>

                    <SelectPodcast image={h} name="Horror Podcast" forPodName={true} ForPodtype={true} />
                    <div className='mt-5 mb-4'>
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
                                            <div className='Movietype'><span>Part 1</span><span className='v-line'></span><span>10 Munities</span><span className='v-line'></span><span>22 June 2022</span></div>
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
                                            <div className='Movietype'><span>Part 2</span><span className='v-line'></span><span>10 Munities</span><span className='v-line'></span><span>22 June 2022</span></div>
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
                                            <div className='Movietype'><span>Part 3</span><span className='v-line'></span><span>10 Munities</span><span className='v-line'></span><span>22 June 2022</span></div>
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
                                            <div className='Movietype'><span>Part 4</span><span className='v-line'></span><span>10 Munities</span><span className='v-line'></span><span>22 June 2022</span></div>
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
                                            <div className='Movietype'><span>Part 5</span><span className='v-line'></span><span>10 Munities</span><span className='v-line'></span><span>22 June 2022</span></div>
                                        </div>
                                        <div><img src={d} /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >

                            {/* <div className='episodeDetails mt-4'>

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
                            </div> */}
                            <EpisodeDetails />
                        </div>
                    </div>
                </div>
             
            </section>
            <Playfooter />
        </>
    )
}
