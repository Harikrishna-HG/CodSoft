// const express = require('express');
// const router = express.Router();
const JobCard = require('../models/JobCard');

// Get all job cards
// router.get('/', async (req, res) => {
//   try {
//     const jobCards = await JobCard.find();
//     res.json(jobCards);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
// const JobCard = require('../models/jobcard'); // Adjust the path if necessary

// Route to create a new job card
router.post('/', async (req, res) => {
  try {
    const job = new JobCard(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all job cards
router.get('/', async (req, res) => {
  try {
    const jobCards = await JobCard.find();
    res.json(jobCards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

