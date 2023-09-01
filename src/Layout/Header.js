import React, { useState } from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import s from '../images/ph_video-thin.png'
import n from '../images/ph_book-open-thin.png'
import n1 from '../images/donation.png'
import g from '../images/ph_apple-podcasts-logo-thin.png'
import hotel1 from '../images/hotelbookingicon.png'
import flight from '../images/r1 (1).png'
import { Link, NavLink } from 'react-router-dom';
import MobileSidebar from './MobileSidebar'
import LoginModal from '../Component/Modal/LoginModal'
import { useLocation } from 'react-router-dom';
export default function Header() {
  const location = useLocation()
  const [modal, setModal] = useState(false);
  const [stickyfix,setStickyfix] =useState (false); 
  const handClickLogin = () => {
    setModal(!modal)
  }
  const toggleSidebarOpen = () => {
    // document.getElementById('Sidebar').style.display = "block";
    document.getElementById("Sidebar").classList.add("show-example");
  }
  const toggleSidebarClose = () => {
    // document.getElementById('Sidebar').style.display = "none";
    document.getElementById("Sidebar").classList.remove("show-example");
}
  function setFixed () {
    if(window.scrollY > 200){
      setStickyfix (true);
      // alert("yes");
    }
    else {
      setStickyfix (false)
    }
  }
 

  console.log(window.location.hash);
  console.log("location", location);
  window.addEventListener("scroll" ,setFixed);

  return (
    <>

      <header className={stickyfix ? 'header fixed':'header'}>
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
                <li style={{position:"relative"}}><a href='/#consumer' className={location.hash == "#consumer" ? "nav__link active" : "nav-link"}>CONSUMER <i class="fa-solid fa-angle-down"></i></a>
                <div className='small-pop box-shadow' style={{top:"25px"}}>
                    <h5><Link to="/"><img src={flight} />Flight Booking</Link></h5>
                    <h5><Link to="/hotel-booking"><img src={hotel1} />Hotel Booking</Link></h5>
                  </div>
                </li>
                <li><a href="/businesshome" className={location.hash == "#businesshome" ? "nav__link active" : "nav-link"}>Business</a></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? "nav__link active" : "nav-link"}>SHOP</NavLink></li>
                <li style={{position:"relative"}} className='explore'><a href="/#explore" className={location.hash == "#explore" ? "nav__link active" : "nav-link"}>EXPLORE <i class="fa-solid fa-angle-down"></i></a>
                  <div className='small-pop box-shadow' style={{top:"25px"}}>
                    <h5><Link to="/podcast"><img src={g} />Podcast</Link></h5>
                    <h5><Link to="/ott-home"><img src={s} />OTT</Link></h5>
                    <h5><Link to="/learning"><img src={n} />Learning</Link></h5>
                    <h5><Link to="/donation"><img src={n1} />Donation</Link></h5>

                  </div>
                </li>
                <li><NavLink to="/news" className={({ isActive }) => isActive ? "nav__link active" : "nav-link"}>NEWS</NavLink></li>
                <li style={{position:"relative"}}><a href="/#company" className={location.hash == "#company" ? "nav__link active" : "nav-link"}>COMPANY <i class="fa-solid fa-angle-down"></i></a>
                <div className='small-pop box-shadow' style={{top:"25px"}}>
                    <h5><Link to="/podcast">About</Link></h5>
                    <h5><Link to="/ott-home">Contact Us</Link></h5>
                    <h5><Link to="/learning">Privacy & Policy</Link></h5>
                  </div>
                </li>
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