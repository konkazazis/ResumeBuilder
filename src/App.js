import './App.css';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Mainpage from './components/mainpage';
import Home from './components/home';
import LandingPage from './components/landingpage';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/mainpage/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
