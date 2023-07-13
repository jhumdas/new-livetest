import React from 'react';
import './App.css';
import './View/Home/Home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from '../src/View/Home/index'

function App() {
  return (
    <React.Fragment>
        <Router>


          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={< Home />} />
             
            </Route>
          </Routes>


        </Router>
      </React.Fragment>
  );
}

export default App;
