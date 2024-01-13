import React, { useState } from 'react';
import './App.css';
import Forms from './components/forms';
import Templates from './components/templates';

function App() {

  const [details, setDetails] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div className="flex h-screen">
      <div className='w-[38%] bg-gray-100 overflow-auto'>
        <Forms 
          details={details} 
          setDetails={setDetails} 
          workExperiences={workExperiences} 
          setWorkExperiences={setWorkExperiences} 
          projects={projects}
          setProjects={setProjects}
          education={education}
          setEducation={setEducation}
          languages={languages}
          setLanguages={setLanguages}
          skills={skills}
          setSkills={setSkills}
        />
      </div>
      <div className='flex-1 bg-gray-200 float-left overflow-auto'>
        <Templates 
          details={details} 
          workExperiences={workExperiences} 
          projects={projects}
          education={education}
          languages={languages}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
