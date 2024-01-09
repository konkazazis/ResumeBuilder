import React, {useState} from 'react'
import PersonalDetails from './personalDetails';

function Forms({formData, setFormData}) {
  const [selectedWorkExperience, setSelectedWorkExperience] = useState([]);
  const [selecteModal , setSelecteModal] = useState([]);
  
  const handleChange = (e, label) => {
    setFormData({
      ...formData,
      [label]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., save data, generate resume, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        
        <PersonalDetails handleChange={handleChange} formData={formData} />                                   
  
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