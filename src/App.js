import React, { useState } from 'react';
import './App.css';
import Forms from './components/forms';
import Templates from './components/templates';

function App() {

  const [details, setDetails] = useState({});
  const [workExperiences, setWorkExperiences] = useState({});

  return (
    <div className="flex h-screen">
      <div className='w-[38%] bg-gray-100 overflow-auto'>
        <Forms details={details} setDetails={setDetails} workExperiences={workExperiences} setWorkExperiences={workExperiences} />
      </div>
      <div className='flex-1 bg-gray-200 float-left overflow-auto'>
        <Templates details={details} workExperiences={workExperiences} />
      </div>
    </div>
  );
}

export default App;
