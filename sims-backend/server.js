const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Initial in-memory student database
let students = [
  { id: "SIMS-001", firstName: "John", lastName: "Doe", gender: "Male", dept: "Computer Science", level: "300", cgpa: "3.50" },
  { id: "SIMS-002", firstName: "Jane", lastName: "Smith", gender: "Female", dept: "Business Admin", level: "200", cgpa: "3.80" }
];

// Health check route
app.get('/', (req, res) => {
  res.send('SIMS backend is running');
});

// GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// POST a new student
app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.json(newStudent);
});

// PUT (Update) an existing student by ID
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const index = students.findIndex((s) => String(s.id).trim() === String(id).trim());

  if (index !== -1) {
    students[index] = { ...students[index], ...updatedData, id };
    return res.json(students[index]);
  } else {
    return res.status(404).json({ error: `Student with ID ${id} not found` });
  }
});

// DELETE a student by ID
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;

  const index = students.findIndex((s) => String(s.id).trim() === String(id).trim());

  if (index !== -1) {
    const deletedStudent = students.splice(index, 1);
    return res.json({ message: 'Deleted successfully', student: deletedStudent[0] });
  } else {
    return res.status(404).json({ error: `Student with ID ${id} not found` });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});