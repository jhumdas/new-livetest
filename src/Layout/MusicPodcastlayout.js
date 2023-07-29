import React from 'react'
import SongSearch from '../Component/SongSearch'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function MusicPodcastlayout() {
    const location = useLocation()
    return (
        <section className='Podcast'>
            <div className='container'>
                <SongSearch searchText="Search Song" />
                <Outlet/>



            </div>
        </section>
    )
}

export default MusicPodcastlayout
