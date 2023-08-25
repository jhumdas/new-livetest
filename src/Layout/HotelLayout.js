import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeStayBox from '../View/HotelBooking/HomeStayBox'

export default function HotelLayout() {
    return (
        <>

            <section className='hotel'>
                <div className='hotel_searchBG'></div>
            <HomeStayBox/>
                <Outlet />
            </section>
        </>
    )
}
