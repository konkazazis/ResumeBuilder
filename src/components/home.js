import {React, useState} from 'react'
import { Link } from 'react-router-dom';

import SavedResumes from './savedResumes';

function Home() {
    
  return (
    <div>
         <header className="h-16 flex justify-center items-center mb-8">
                <nav className='w-[80%] sticky top-0 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button><h1 className='text-xl font-semibold italic'>
                            Job-Ready
                        </h1></button></Link> 
                    </div>
                    <div className=''>
                        <ul className='flex items-center'>
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/home'><button><li>Home</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/create'><button><li>Create</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/design'><button><li>Design</li></button></Link> 
                            <li className=' text-white mr-2 cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>
                                <button>
                                    USER_IMAGE_AND_NAME
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className='flex h-screen p-8'>
                <div className='w-[38%] overflow-auto'>
                    <SavedResumes />
                </div>
                <div className='flex-1 float-left overflow-y-auto'>
                    
                </div>
            </div>
    </div>
    
  )
}

export default Home