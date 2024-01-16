import React, {useState} from 'react'
import Plain from './templates/plain'
import Home from './home'

function Templates({ details, workExperiences, projects, education, languages, skills }) {
  const [component, setComponent] = useState(<Home />)

  const changeComponent = (component) => {
    setComponent(component);
  }
    
    return (
        <div className="bg-gray-200 p-8">
          <nav className='bg-gray-200 w-[100%] border-b-2 border-slate-300 sticky top-0'>
            <ul className='flex justify-between'>
              <li onClick={() => changeComponent(<Home />)} className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2'>Home</li>
              <li onClick={() => changeComponent(<Plain details={details} workExperiences={workExperiences} projects={projects} education={education} languages={languages} skills={skills} />)} className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2'>Create</li>
              <li className='text-xl text-gray-700 hover:bg-white hover:cursor-pointer px-10 py-2'>Design</li>
            </ul>
          </nav>
          {component}
        </div>
      );
    };
    
    

export default Templates