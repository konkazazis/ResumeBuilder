import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

function Languages({handleChange, formData}) {
  const [languages, setLanguages] = useState([]);

  const addLanguages = () => {
    setLanguages([...languages, { languageName: '', level: ''}]);
  };

  const removeLanguages = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleInputChange = (index, key, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][key] = value;
    setLanguages(updatedLanguages);
  };

  return (
      <div>
        <h1 className="text-lg">Languages</h1>
        
        <button
          type="button"
          className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
          onClick={addLanguages}
        >
           <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
        </button>

        {languages.map((languages, index) => (
          <div key={index} className="mb-4">
              <div>
                  <div>
                      <label className="text-sm font-medium text-gray-600">Language</label>
                      <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={languages.languageName}
                      onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                      />
                  </div>
              
                  <div>
                      <label className="mt-4 text-sm font-medium text-gray-600">Level</label>
                      <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={languages.level}
                      onChange={(e) => handleInputChange(index, 'position', e.target.value)}
                      />
                  </div>
              </div>
             
          <button
              type="button"
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
              onClick={() => removeLanguages(index)}
          >
              Remove
          </button>

      </div>
      ))}
  </div>
  );
}

export default Languages