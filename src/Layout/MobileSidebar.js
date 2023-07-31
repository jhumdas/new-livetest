import React from 'react'
import s from '../images/ph_video-thin.png'
import n from '../images/ph_book-open-thin.png'
import g from '../images/ph_apple-podcasts-logo-thin.png'
import { Link } from 'react-router-dom'
export default function MobileSidebar({ closeIcon }) {
    return (
        <>
            <div className='Sidebar slide-right' id="Sidebar">
                <a className='SidebarClose' onClick={() => { closeIcon('none') }}><i class="fa-solid fa-circle-xmark"></i></a>
                <ul>
                    <li><a href="#">PARTNERS</a></li>
                    <li><a href="#">CONSUMER</a></li>
                    <li><a href="#">Business</a></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li style={{position:"relative"}}><a href="#">EXPLORE</a> <i class="fa-solid fa-angle-down"></i>
                        <div className='small-pop box-shadow' style={{ top: "25px" }}>
                            <h5><Link to="/podcast"><img src={g} />Podcast</Link></h5>
                            <h5><img src={s} />OTT</h5>
                            <h5><img src={n} />Learning</h5>

                        </div>
                    </li>
                    <li><Link to="/news">NEWS</Link></li>
                    <li><a href="#">COMPANY</a></li>
                </ul>
            </div>

        </>
    )
}
