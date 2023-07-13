import React from 'react';
import './App.css';
import '../src/View/News/News.css';
import '../src/View/About/About.css';
import '../src/View/Newsdetails/Newsdetails.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './View/Home/Index';
import About from '../src/View/About/Index';
import News from '../src/View/News/Index';
import Newsdetails from '../src/View/Newsdetails/Index'




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
            </Route>
          </Routes>


        </Router>
      </React.Fragment>
  );
}

export default App;
