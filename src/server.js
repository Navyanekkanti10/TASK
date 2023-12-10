const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true, useUnifiedTopology: true });

const teacherSchema = new mongoose.Schema({
  name: String,
  id: String,
  department: String,
  yearOfJoining: Number,
  performance: Number,
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Create other schemas and models for students, milestones, and events

app.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add similar routes for students, milestones, and events

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
