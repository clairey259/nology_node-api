const Router = require ('express');
const students = require('../Controllers/students.controller');

const router = Router();


router.get('/', students.findAll)

//get a specific student
router.get('/:id', students.find)

//post (make) a new student
router.post('/', students.create)

// delete a student
router.delete('/:id', students.destroy)


module.exports = router; 