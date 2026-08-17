// the routers in which this file in directs incoming requests
//

const express = require('express');  // we need express because we want to use a specific routing feature called express.Router()
const router = express.Router();
const { getAllStudents, createStudent, updateStudent, deleteStudent } = require('../controllers/studentControllers');// imporst brain function 

router.get('/api/students', getAllStudents);

router.post('/api/students', createStudent);

router.put('/api/students/:id', updateStudent);

router.delete('/api/students/:id', deleteStudent);

module.exports = router;