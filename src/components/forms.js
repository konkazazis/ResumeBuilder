import React, {useState} from 'react'
import PersonalDetails from './personalDetails';
import WorkExperience from './workExperience';
import Projects from './projects';
import Education from './education';
import Languages from './languages';
import Skills from './skills';

function Forms({details, setDetails , workExperiences, setWorkExperiences, projects, 
  setProjects, education, setEducation, languages, setLanguages, skills, setSkills}) {

  const handleChange = (e, label) => {
    setDetails({
      ...details,
      [label]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        
        <PersonalDetails handleChange={handleChange} details={details} />                                   
        <WorkExperience workExperiences={workExperiences} setWorkExperiences={setWorkExperiences} />
        <Education education={education} setEducation={setEducation} />
        <Languages languages={languages} setLanguages={setLanguages} />
        <Projects projects={projects} setProjects={setProjects} /> 
        <Skills skills={skills} setSkills={setSkills} />

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Generate Resume
          </button>
        </div>
        
      </form>
    </div>
  );
};
export default Forms