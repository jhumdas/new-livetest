import React, { useState } from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import s from '../images/ph_video-thin.png'
import n from '../images/ph_book-open-thin.png'
import g from '../images/ph_apple-podcasts-logo-thin.png'
import { Link, NavLink } from 'react-router-dom';
import MobileSidebar from './MobileSidebar'
import LoginModal from '../Component/Modal/LoginModal'
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation()
  const [modal, setModal] = useState(false);
  const handClickLogin = () => {
    setModal(!modal)
  }
  const toggleSidebarOpen = () => {
    document.getElementById('Sidebar').style.display = "block";
  }
  const toggleSidebarClose = () => {
    document.getElementById('Sidebar').style.display = "none";


  }

  console.log(window.location.hash);
  console.log("location", location);


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
              <a href="#" className='toggole' onClick={toggleSidebarOpen}><i class="fa-solid fa-bars-staggered"></i></a>
              <ul>
                <li><a href='/#partners' className={location.hash == "#partners" ? "nav__link active" : "nav-link"}>PARTNERS</a></li>
                <li><a href='/#consumer' className={location.hash == "#consumer" ? "nav__link active" : "nav-link"}>CONSUMER</a></li>
                <li><a href="/#business" className={location.hash == "#business" ? "nav__link active" : "nav-link"}>Business</a></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? "nav__link active" : "nav-link"}>SHOP</NavLink></li>
                <li style={{position:"relative"}} className='explore'><a href="/#explore" className={location.hash == "#explore" ? "nav__link active" : "nav-link"}>EXPLORE <i class="fa-solid fa-angle-down"></i></a>
                  <div className='small-pop box-shadow' style={{top:"25px"}}>
                    <h5><Link to="/podcast"><img src={g} />Podcast</Link></h5>
                    <h5><img src={s} />OTT</h5>
                    <h5><img src={n} />Learning</h5>

                  </div>
                </li>
                <li><NavLink to="/news" className={({ isActive }) => isActive ? "nav__link active" : "nav-link"}>NEWS</NavLink></li>
                <li><a href="/#company" className={location.hash == "#company" ? "nav__link active" : "nav-link"}>COMPANY</a></li>
              </ul>
              <a href="#" className='account' onClick={handClickLogin}>PROFILE <img src={profile} style={{ marginLeft: "7px" }} /></a>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar closeIcon={toggleSidebarClose} />

      {modal && <LoginModal />}
    </>
  )
}