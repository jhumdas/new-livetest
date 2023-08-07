import React from 'react';
import SearchCourse from '../Component/SearchCourse';
import { Outlet } from 'react-router-dom'

export default function BusinessLayout() {
    return (
        <>
            <section className='business_home'>
                <div className='container'>
                    <SearchCourse searchText="Search Course" iconH={true} iconI={true} iconA={false} />
                    <Outlet />
                </div>
            </section>
        </>
    )
}
