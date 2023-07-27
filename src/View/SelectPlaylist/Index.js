import React from 'react'
import SelectPodcast from '../../Component/SelectPodcast'
import v from '../../images/Rectangle 446 (1).png'
import c from '../../images/lady.png'
import Playfooter from '../../Component/Playfooter'
import Playlist from '../../Component/Playlist'
export default function Index() {
    return (
        <>

            <section className='select-song selectpodcast-details'>
                <div className='container'>
                    <SelectPodcast image={v} name="Lorem ipsum dolor sit amet consectetur." Forsongtype={true} forSongName={true} queue={true} />
                   
                    <Playlist heart={<i class="fa-regular fa-heart"></i>}/>
                </div>
            </section>
            <Playfooter />

        </>
    )
}
