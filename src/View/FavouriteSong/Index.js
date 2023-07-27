import React from 'react'
import SongSearch from '../../Component/SongSearch'
import c from '../../images/lady.png'
import Playlist from '../../Component/Playlist'
export default function Index() {
    return (
        <>

            <section className='Favourite-song'>
                <div className='container'>
                    <SongSearch />
                    <Playlist heart={<i class="fa-solid fa-heart" style={{color:"#FF3A44"}}></i>}/>
                </div>
            </section>
        </>
    )
}
