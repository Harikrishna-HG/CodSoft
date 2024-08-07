const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobCards = require('./routes/jobCards');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use('/job-cards', jobCards);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

