import React, { useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

import { Outlet, useLocation } from 'react-router-dom'
export default function MainLayout() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })

  },[location])
  return (
    <>
    <Header/>
    <div className='mainpage'><Outlet /></div> 
    <Footer/>

    </>
  )
}
