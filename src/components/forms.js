import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import Modal from 'react-modal';

function Forms({formData, setFormData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPersonalDetails, setSelectedPersonalDetails] = useState([]);
  const [selectedWorkExperience, setSelectedWorkExperience] = useState([]);
  const [selecteModal , setSelecteModal] = useState([]);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    // personalDetails2.push(option);
    // console.log(personalDetails2);
    setSelectedPersonalDetails([...selectedPersonalDetails, option]);
    closeModal();
  };

  const menuOptions = [
    "Personal Details",
    "Work Experience",
    "Education",
    "Projects",
    "Skills",
    "Languages"
  ];
  const personalDetails = [
    "fullname",
    "title",
    "email",
    "phone",
    "linkedin",
    "github",
    "twitter",  
  ];
  const personalDetails2 = [];
  const workExperience = [
    "company",
    "position",
    "city",
    "state",
    "start",
    "end",
    "description",
  ];
  const education = [
    "school",
    "degree",
    "city",
    "state",
    "start",
    "end",
    "description",
  ];
  const projects = [
    "name",
    "description",
    "link",
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
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        
        {/* Personal Information */}
          {menuOptions.map((label, index) => (
            <div>
              <h1 className="text-xl mb-4">{label}</h1>
              <div className="grid grid-cols-2 gap-4">
                { label === "Personal Details" ? (
                    selectedPersonalDetails.map((label, index) => (
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {label}
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={label}
                          value={formData[label]}
                          onChange={(e) => handleChange(e, label)}
                        />
                      </div>
                    ))
                  ) : label === "Work Experience" ? (
                    selectedWorkExperience.map((label, index) => (
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {label}
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={label}
                          value={formData[label]}
                          onChange={(e) => handleChange(e, label)}
                        />
                      </div>
                  ))
                  ) : <div>test</div>}
              </div>
              <button
                type="button"
                className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
                onClick={openModal}
                >
                <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
              </button>
              {}
            </div>
          ))}
          
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="bg-white border-2 rounded-md shadow-lg p-4 w-1/3 h-1/2"
            style={
              {
                overlay: {
                  position: 'fixed',
                  backgroundColor: "none",
                },
                content: {
                  width: '18rem',
                  position: 'absolute',
                  top: '10%',
                  left: '15%',
                  right: '10%',
                  bottom: '10%',
                  border: '1px solid #ccc',
                  background: '#fff',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '0',
                }
              }
            }
          >
            <div>
              {personalDetails.map((label, index) => (
                <div className='hover:bg-slate-300'>
                  <button onClick={() => handleOptionClick(label)} className='text-l text-left w-[18rem] pl-2 '>
                    {label}
                  </button>
                </div>
              ))}
            </div>
          </Modal> 
  
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