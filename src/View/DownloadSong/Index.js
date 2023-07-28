import React from 'react'
import Playlist from '../../Component/Playlist'
import SongSearch from '../../Component/SongSearch'
export default function Index() {
    
    return (
        <>

            <section className='Favourite-song'>
                <div className='container'>
                    <SongSearch searchText="Search Song"/>
                    <Playlist heart={<i class="fa-regular fa-heart"></i>}/>
                </div>
            </section>
        </>
    )
}
