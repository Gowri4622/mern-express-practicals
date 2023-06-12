const express = require('express')
const router = express.Router();
const employeeModel = require('../models/employee')
const {getAllEmployees, addEmployee, updateEmployee, deleteEmployee, getEmployee, getEmployeeByID} = require('../controllers/employee')


router.route('/').get(getAllEmployees).post(addEmployee)

router.route('/:id').get(getEmployee, getEmployeeByID).patch(getEmployee, updateEmployee).delete(getEmployee, deleteEmployee);

module.exports = router