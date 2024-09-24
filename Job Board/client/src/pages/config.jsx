// src/config.js


// Named export for apiUrl
export const apiUrl = "https://jobboard-backend-l8h1.onrender.com/job-cards";

// Default export for config
const config = process.env.PORT && apiUrl;

export default config;

