import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function WorkExperience({handleChange, formData}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWorkExperience, setSelectedWorkExperience] = useState([]);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedWorkExperience([...selectedWorkExperience, option]);
        handleModal();
    };

    const workExperience = [
        "company",
        "position",
        "city",
        "state",
        "start",
        "end",
        "description",
    ];

  return (
    <div>
        <h1 className='text-lg'>Work Experience</h1>
        {selectedWorkExperience.map((option) => (
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {option}
                </label>
                <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={option}
                value={formData[option]}
                onChange={(e) => handleChange(e, option)}
                />
            </div>       
        ))}
        <button
            type="button"
            className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
            onClick={handleModal}
            >
            <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
        </button> 
        <div className='bg-white w-full h-[5rem] rounded-md '>
            
        </div>
    </div>
      
  )
}

export default WorkExperience