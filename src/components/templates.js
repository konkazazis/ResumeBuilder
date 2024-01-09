import React from 'react'

function templates({ formData }) {
    // return (
    //     <div className="container mx-auto p-4">
    //       <div className="max-w-md mx-auto  w-[20rem] h-[23rem] bg-white p-8 rounded shadow-md">
    //         <h2 className="text-2xl font-semibold mb-4">Generated Resume</h2>
    
    //         {/* Display Personal Information */}
    //         <div className="mb-4">
    //           <h3 className="text-lg font-medium">Personal Information</h3>
    //           <p className="text-gray-700">
    //             {formData.firstName} {formData.lastName}
    //           </p>
    //         </div>
    
    //         {/* Display other fields as needed */}
    //         {/* Example: Email and Phone */}
    //         <div className="mb-4">
    //           <h3 className="text-lg font-medium">Contact Information</h3>
    //           <p className="text-gray-700">
    //             Email: {formData.email} <br />
    //             Phone: {formData.phone}
    //           </p>
    //         </div>
    
    //         {/* Add more sections for education, experience, skills, etc. as needed */}
    //       </div>
    //     </div>
    //   );
    // };

    return (
        <div className="bg-gray-200 p-8">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
            <header className="text-center mb-6">
              <h1 className="text-3xl font-bold">{formData.fullname ? formData.fullname : "Your Name"}</h1>
              <p className="text-gray-600">Web Developer</p>
            </header>
    
            {/* Contact Information */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <ul className="list-disc ml-6">
                <li>Email : {formData.email ? formData.email : "your.email@example.com"}</li>
                <li>Phone : {formData.phone ? formData.phone : "(123) 456-7890"}</li>
                <li>LinkedIn : {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourname"}</li>
                <li>Github : {formData.github ? formData.github : "github.com/yourusername"}</li>
              </ul>
            </section>
    
            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <div>
                <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">University Name, Graduation Year</p>
              </div>
            </section>
    
            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
              <div>
                <p className="text-lg font-semibold">Software Developer</p>
                <p className="text-gray-600">Company Name, Start Date - End Date</p>
                <ul className="list-disc ml-6">
                  <li>Developed and maintained web applications.</li>
                  <li>Collaborated with cross-functional teams.</li>
                  {/* Add more points as needed */}
                </ul>
              </div>
            </section>
    
            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <ul className="flex flex-wrap">
                <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">React</li>
                <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">JavaScript</li>
                <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">HTML</li>
                <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">CSS</li>
                {/* Add more skills as needed */}
              </ul>
            </section>
          </div>
        </div>
      );
    };
    
    

export default templates