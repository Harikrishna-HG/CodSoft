// src/config.js

// Check if the environment is development or production
const isDevelopment = process.env.NODE_ENV === 'development';

// Named export for apiUrl based on the environment
export const apiUrl = isDevelopment
  ? "http://localhost:5000/job-cards" // Local development server
  : "https://jobboard-backend-l8h1.onrender.com/job-cards"; // Production server

// Since PORT is not relevant in the frontend, we'll just use a default value or remove it entirely if not needed.
// This config variable can now be used for other default configurations as needed.
const config = 5000; // If you don't need this, you can also remove this line.

export default config;

