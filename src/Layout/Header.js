import React, { useState } from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom'
import MobileSidebar from './MobileSidebar'
import LoginModal from '../Component/Modal/LoginModal'

export default function Header() {
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
                <li><a href="#">PARTNERS</a></li>
                <li><a href="#">CONSUMER</a></li>
                <li><a href="#">Business</a></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><a href="#">EXPLORE</a></li>
                <li><Link to="/news">NEWS</Link></li>
                <li><a href="#">COMPANY</a></li>
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