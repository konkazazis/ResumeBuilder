import './App.css';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Mainpage from './components/mainpage';
import Home from './components/home';
import LandingPage from './components/landingpage';


function App() {

  return (
    <div>
      <Link to='/'></Link>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Link to='/mainpage'></Link>
      <Routes>
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
      <Link to='mainpage/home'></Link>
      <Routes>
        <Route path="mainpage/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
