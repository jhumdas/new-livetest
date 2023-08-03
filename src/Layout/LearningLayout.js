import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchCourse from '../Component/SearchCourse'

export default function LearningLayout() {
    return (
        <>

            <section className='Learning'>
                <div className='container'>
                    <SearchCourse searchText="Search Courses" iconB={false} iconG={true} iconC={false}/>
                    <Outlet/>
                </div>
            </section>

        </>
    )
}
