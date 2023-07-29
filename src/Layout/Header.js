import React, { useState } from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import { Link,NavLink } from 'react-router-dom';
import MobileSidebar from './MobileSidebar'
import LoginModal from '../Component/Modal/LoginModal'
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation()
  const[modal,setModal]= useState(false);
  const handClickLogin = ()=>{
    setModal(!modal)
  }
const toggleSidebarOpen = () =>{
  document.getElementById ('Sidebar').style.display ="block";
}
const toggleSidebarClose = () =>{
  document.getElementById ('Sidebar').style.display ="none";


}

console.log(window.location.hash);
console.log("location",location);


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
                <li><a href='/#partners' className={location.hash=="#partners"?"nav__link active":"nav-link"}>PARTNERS</a></li>
                <li><a href='/#consumer'  className={location.hash=="#consumer"?"nav__link active":"nav-link"}>CONSUMER</a></li>
                <li><NavLink to="/business" className={({isActive})=>isActive?"nav__link active":"nav-link"}>Business</NavLink></li>
                <li><NavLink to="/shop" className={({isActive})=>isActive?"nav__link active":"nav-link"}>SHOP</NavLink></li>
                <li><NavLink to="/explore" className={({isActive})=>isActive?"nav__link active":"nav-link"}>EXPLORE</NavLink></li>
                <li><NavLink to="/news" className={({isActive})=>isActive?"nav__link active":"nav-link"}>NEWS</NavLink></li>
                <li><NavLink to="/company" className={({isActive})=>isActive?"nav__link active":"nav-link"}>COMPANY</NavLink></li>
              </ul>
              <a href="#" className='account' onClick={handClickLogin}>PROFILE <img src={profile} style={{ marginLeft: "7px" }} /></a>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar closeIcon={toggleSidebarClose}/>

      {modal &&<LoginModal/>}
    </>
  )
}