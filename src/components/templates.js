import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Plain from './templates/plain'
import Home from './home'

function Templates({ details, workExperiences, projects, education, languages, skills }) {

    return (
      <Router>
        <div className="bg-gray-200 p-8">
          <nav className='bg-gray-200 w-[100%] border-b-2 border-slate-300 sticky top-0'>
            <ul className='flex justify-between'>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="/home">Home</Link>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="/create">Create</Link>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="/design">Design</Link>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Plain details={details} workExperiences={workExperiences} projects={projects} education={education} languages={languages} skills={skills}/>} />
          </Routes>
        </div>
      </Router>
      );
    };
    
    

export default Templates