// src/config.js
const dev = {
  apiUrl: "http://localhost:5000/job-cards",
};

const prod = {
  apiUrl: "https://your-deployed-server-url.com/job-cards",
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;

