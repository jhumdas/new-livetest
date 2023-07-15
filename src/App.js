import React from 'react';
import './App.css';
import './View/Home/Home.css'
import '../src/View/News/News.css';
import '../src/View/About/About.css';
import '../src/View/Newsdetails/Newsdetails.css';
import '../src/View/Shop/Shop.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from '../src/View/Home/index';
import About from '../src/View/About/Index';
import News from '../src/View/News/Index';
import Newsdetails from '../src/View/Newsdetails/Index';
import Shop from '../src/View/Shop/Index';

function App() {
  return (
    <React.Fragment>
        <Router>


          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={< Home />} />
              <Route path="/about" element={< About />} />
              <Route path="/news" element={< News />} />
              <Route path="/newsdetails" element={<Newsdetails/>}/>
              <Route path="/shop" element={<Shop/>}/>
            </Route>
          </Routes>


        </Router>
      </React.Fragment>
  );
}

export default App;
