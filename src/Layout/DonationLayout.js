import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchCourse from '../Component/SearchCourse'
export default function DonationLayout() {
    return (
        <>

            <section className='donation'>
                <div className='container'>
                    <SearchCourse searchText="Search Courses" iconS={true} iconA={false} iconB={false} iconV={true} iconC={false} iconW={true} />
                </div>
                <Outlet />

            </section >
        </>
    )
}
