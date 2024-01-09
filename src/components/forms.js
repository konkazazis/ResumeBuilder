import { info } from 'autoprefixer';
import React, {useState} from 'react'

function Forms({formData, setFormData}) {
  const infolist = [
    "firstname",
    "lastname",
    "email",
    "phone",
    "linkedin",
    "github",
    "twitter",  
  ];
  
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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        
        {/* Personal Information */}
        <div className="grid grid-cols-2 gap-4">
        {infolist.map((label, index) => (
        <div key={index}>
          <label htmlFor={label}>{label}:</label>
          <input
            type="text"
            id={label}
            name={label}
            value={formData[label] || ''}
            onChange={(e) => handleChange(e, label)}
          />
        </div>
      ))}
        </div>
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