const {Router } = require('express');
const {getStudents, createStudent, getStudentById, search, updateStudent, deleteStudent} = require('../controllers/student')

const studentRouter = Router();

studentRouter.get('/', getStudents)
studentRouter.post('/', createStudent)
studentRouter.get('/:id', getStudentById)
studentRouter.post('/search', search)
studentRouter.put('/:id/update', updateStudent)
studentRouter.delete('/:id/delete', deleteStudent)


module.exports = studentRouter