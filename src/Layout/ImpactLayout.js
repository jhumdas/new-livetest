import React from 'react';
import SearchCourse from '../Component/SearchCourse';
import { Outlet } from 'react-router-dom'

export default function ImpactLayout() {
    return (
        <>
            <section className='impact_home'>
                <div className='container'>
                    <SearchCourse searchText="Search Course" iconV={true} iconT={true} iconA={false} />
                    <Outlet />
                </div>
            </section>
        </>
    )
}
