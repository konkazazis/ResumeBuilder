import React from 'react'

function templates({ details, workExperiences }) {
    
    return (
        <div className="bg-gray-200 p-8">
          <div className="w-[45rem] h-[58rem] mx-auto bg-white p-6 rounded-md shadow-md">
            <header className="text-left mb-6">
              <h1 className="text-3xl font-bold">{details.fullname ? details.fullname : "Your Name"}</h1>
              <p className="text-gray-600">Web Developer</p>
              <hr className="border-gray-400 flex-grow mt-2" />
            </header>
    
            {/* Contact Information */}
            <section className="mb-6">
              <ul className="text-sm flex justify-between">
                <li>{details.email ? details.email : "your.email@example.com"}</li>
                <li>{details.phone ? details.phone : "(123) 456-7890"}</li>
                <li>{details.linkedin ? details.linkedin : "linkedin.com/in/yourname"}</li>
                <li>{details.github ? details.github : "github.com/yourusername"}</li>
              </ul>
              <hr className="border-gray-400 flex-grow mt-2" />
            </section>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="mb-6">
                  
                  {/* Work Experience */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Work Experience</h2>
                    <div>
                      {workExperiences ? workExperiences.map((index) => (
                        <div>
                          <p className="text-lg font-semibold">{index.companyName}</p>
                          <p className="text-gray-600">{index.position}</p>
                          <p className="text-gray-600">{index.startDate} - {index.endDate}</p>
                          <ul className="list-disc ml-6">
                            <li>{index.description}</li>
                          </ul>
                        </div>
                      )) : ( 
                        <div>
                          <p className="text-lg font-semibold">Company Name</p>
                          <p className="text-gray-600">Position</p>
                          <p className="text-gray-600">Start Date - End Date</p>
                          <ul className="list-disc ml-6">
                            <li>Description</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>

                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Education</h2>
                    <div>
                      <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
                      <p className="text-gray-600">University Name, Graduation Year</p>
                    </div>
                  </section>

                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Languages</h2>
                    <div>
                      <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
                      <p className="text-gray-600">University Name, Graduation Year</p>
                    </div>
                  </section>
                </div>

                {/* Right Column */}
                <div>
                  <section>
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Projects</h2>
                    <div>
                      <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
                      <p className="text-gray-600">University Name, Graduation Year</p>
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

          </div>
        </div>
      );
    };
    
    

export default templates