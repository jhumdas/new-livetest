import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <>
    <Header/>
    <div className='mainpage'><Outlet /></div> 
    <Footer/>

    </>
  )
}
