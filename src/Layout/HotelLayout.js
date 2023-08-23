import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HotelLayout() {
    return (
        <>

            <section className='hotel'>
                <div className='hotel_searchBG'></div>
                <div className='hotel_search'>
                    <h6>Book Hotel & Homestay</h6>
                </div>
                <Outlet />
            </section>
        </>
    )
}
