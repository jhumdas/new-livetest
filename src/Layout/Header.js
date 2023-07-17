import React from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>

      <header className='header'>
        <div className='container'>
          <div className='wraper'>
            <Link to="/">
            <div className='logo'>
              <img src={logo} />
            </div>
            </Link>
            <div className='menuPart'>
              <a href="#" className='toggole'><i class="fa-solid fa-bars-staggered"></i></a>
              <ul>
                <li><a href="#">PARTNERS</a></li>
                <li><a href="#">CONSUMER</a></li>
                <li><a href="#">Business</a></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><a href="#">EXPLORE</a></li>
                <li><Link to="/news">NEWS</Link></li>
                <li><a href="#">COMPANY</a></li>
              </ul>
              <a href="#" className='account'>PROFILE <img src={profile}/></a>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}