import React, { useState } from 'react';
import './App.css';
import Forms from './components/forms';
import Templates from './components/templates';

function App() {

  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="flex h-screen">
      <div className='flex-1 bg-gray-100'>
        <Forms onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData}/>
      </div>
      <div className='flex-1 bg-gray-200 float-left'>
        <Templates formData={formData} />
      </div>
    </div>
  );
}

export default App;
