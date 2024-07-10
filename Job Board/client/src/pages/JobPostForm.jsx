import React, { useState } from 'react';
import axios from 'axios';

const JobPostForm = () => {
  const [job, setJob] = useState({
    title: '',
    location: '',
    type: 'remote',
    skills: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', {
        ...job,
        skills: job.skills.split(',').map(skill => skill.trim()),
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto  p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a Job</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input 
          type="text" 
          name="title" 
          value={job.title} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input 
          type="text" 
          name="location" 
          value={job.location} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select 
          name="type" 
          value={job.type} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Skills</label>
        <input 
          type="text" 
          name="skills" 
          value={job.skills} 
          onChange={handleChange} 
          required 
          placeholder="Comma separated skills" 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Salary</label>
        <input 
          type="text" 
          name="salary" 
          value={job.salary} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Post Job
      </button>
    </form>
  );
};

export default JobPostForm;
