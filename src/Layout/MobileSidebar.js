import React from 'react'
import { Link } from 'react-router-dom'
export default function MobileSidebar({closeIcon}) {
    return (
        <>
            <div className='Sidebar slide-right' id="Sidebar">
                <a className='SidebarClose' onClick={()=>{closeIcon('none')}}><i class="fa-solid fa-circle-xmark"></i></a>
                <ul>
                    <li><a href="#">PARTNERS</a></li>
                    <li><a href="#">CONSUMER</a></li>
                    <li><a href="#">Business</a></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><a href="#">EXPLORE</a></li>
                    <li><Link to="/news">NEWS</Link></li>
                    <li><a href="#">COMPANY</a></li>
                </ul>
            </div>

        </>
    )
}
