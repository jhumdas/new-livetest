import React from 'react'
import { Link } from 'react-router-dom';
import ProductSearch from '../Component/ProductSearch'
import { Outlet } from 'react-router-dom'
import h from '../images/Rectangle 443.png'
import d from '../images/bi_download.png'
import SearchCourse from '../Component/SearchCourse';
export default function OTTLayout() {
    return (
        <>

            <section className='Ott-home'>
                <div className='container'>
                    <SearchCourse searchText="Search Movies & Tv Shows" iconD={true} iconA={false} iconB={false} iconC={false} iconE={true} iconF={true} />
                    <Outlet />
                </div>
            </section>
        </>
    )
}
