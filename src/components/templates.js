import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Plain from './templates/plain'
import Home from './home'

function Templates({ details, workExperiences, projects, education, languages, skills }) {

    return (
        <div className=" p-8">
          <nav className='bg-white w-[100%] border-b-2 border-slate-300 sticky top-0'>
            <ul className='flex justify-between'>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="home">Home</Link>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="/create">Create</Link>
              <Link className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2' to="/design">Design</Link>
            </ul>
          </nav>
          <Home />
        </div>
      );
    };
    
    

export default Templates