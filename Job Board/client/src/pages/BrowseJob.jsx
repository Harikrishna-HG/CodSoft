import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from './config'; // Import apiUrl directly

const BrowseJob = () => {
  const [jobCards, setJobCards] = useState([]);

  useEffect(() => {
    const fetchJobCards = async () => {
      try {
        const response = await axios.get(apiUrl); // Use apiUrl here
        setJobCards(response.data);
      } catch (error) {
        console.error('Error fetching job cards:', error);
      }
    };

    fetchJobCards();
  }, []);

  const handleApply = (jobTitle) => {
    alert(`Applying for ${jobTitle}`);
    // You can add further logic here to handle job application
  };

  return (
    <div className="App">
      <hr className="border-t-1 border-black" />
      <div className="job-cards-container flex flex-wrap justify-center bg-lime-400 ">
        {jobCards.map((job) => (
          <div key={job._id} className="job-card bg-lime-500 leading-tight border border-black rounded-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4 flex-grow-0 flex-shrink-0 sm:mx-6">
            <h2 className="text-xl font-bold mb-4">{job.title}</h2>
            <p className="mb-2">Location: {job.location}</p>
            <p className="mb-2">Type: {job.type}</p>
            <p className="mb-2">Skills: {job.skills.join(', ')}</p>
            <p className="mb-2">Salary: {job.salary}</p>
            <button
              className="apply-button bg-blue-400 hover:bg-red-600 hover:text-white p-1 rounded mt-2"
              onClick={() => handleApply(job.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseJob;
