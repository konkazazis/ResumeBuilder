import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Mainpage from './mainpage';

const LandingPage = () => {

  return (
   
        <div>
            <header className="bg-slate-200 h-16 flex justify-center items-center">
                <nav className='w-[80%] sticky top-0 flex justify-between'>
                    <div className='flex items-center '>
                        <h1 className='text-xl font-semibold italic'>
                            Job-Ready
                        </h1>
                    </div>
                    <div className=''>
                        <ul className='flex items-center'>
                            <li className='mr-10'>Home</li>
                            <li className='mr-10'>Create</li>
                            <li className='mr-10'>Design</li>
                            <li className=' text-white mr-2 cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Login</li>
                            <li className='text-white cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Sign Up</li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className='w-[80%] mx-auto bg-slate-50'>
                <div className='flex justify-between items-center'>
                    <div className='w-[50%] p-10'>
                        <h1 className='text-5xl font-semibold mb-4'>Create your resume in minutes</h1>
                        <p className='text-2xl font-semibold'>Get started with our easy-to-use resume builder now.</p>
                        <Link to='/mainpage'> <button className='bg-sky-400 rounded-md px-4 py-2 shadow-md mt-4'>Get Started</button> </Link>
                    </div>
                    <div className='w-[50%]'>
                        <img src="https://www.freepnglogos.com/uploads/website-logo-png/website-logo-website-logo-png-transparent-svg-vector-bie-supply-1.png" alt="" className='w-[100%]' />
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white p-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-2">Connect With Us</p>
                        <div className="flex items-center justify-center space-x-4">
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-2">Contact Us</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>

            
            <Routes>
                <Route path="/mainpage" element={<Mainpage />} />
            </Routes>
         
        </div>
    
  );
};

export default LandingPage;
