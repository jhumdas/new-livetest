import React from 'react'
import f from '../images/Ellipse 210.png'
import i from '../images/Ellipse 211.png'
export default function EpisodeDetails(props) {
    const {songDetails=false}=props;
    return (
        <>
            <div className='episodeDetails mt-4'>

                <h5>Description</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi pretium cras fringilla amet platea lacinia. Nulla habitant nunc fusce hendrerit et molestie porttitor. Arcu suspendisse accumsan ullamcorper ac. Amet semper mi dui volutpat dui ut.<span>Read more</span> </p>
                {songDetails&&<div className='song-details mb-3'>
                    <p>Released on : Jun 23, 2023</p>
                    <p> Duration: 04:07</p>
                    <p>Language: English</p>
                </div>}
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

        </>
    )
}
