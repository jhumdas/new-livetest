import React from 'react'
import Playlist from '../../Component/Playlist'
import SongSearch from '../../Component/SongSearch'
export default function Index() {
    
    return (
        <>

            <section className='Favourite-song'>
                <div className='container'>
                    <SongSearch />
                    <Playlist/>
                </div>
            </section>
        </>
    )
}
