const mongoose = require('mongoose');

const JobCardSchema = new mongoose.Schema({
  title: String,
  location: String,
  type: { type: String, enum: ['remote', 'onsite', 'hybrid'] },
  skills: [String],
  salary: String,
});

module.exports = mongoose.model('JobCard', JobCardSchema);
