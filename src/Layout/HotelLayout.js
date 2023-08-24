import React from 'react'
import { Outlet } from 'react-router-dom'
import s from '../images/iconamoon_search-thin.png'
export default function HotelLayout() {
    return (
        <>

            <section className='hotel'>
                <div className='hotel_searchBG'></div>
                <div className='hotel_search'>
                    <h6>Book Hotel & Homestay</h6>
                    <div className='location'>
                        <label>Where</label>
                        <div className='inputBox'>
                            <input type='text' placeholder='London' />
                            <img src={s} />
                        </div>

                    </div>
                </div>
                <Outlet />
            </section>
        </>
    )
}
