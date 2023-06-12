const employeeModel = require('../models/employee')

const getAllEmployees = async(request,response)=>{
    try
    {
        const employees = await employeeModel.find()
        response.status(200).json(employees)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

const addEmployee = async(request, response)=>{
    const newEmployee = new employeeModel({
        name: request.body.name,
        enrollmentDepartment: request.body.enrollmentDepartment,
        enrollmentDate: request.body.enrollmentDate
    })
    
    try{
        const employee = await newEmployee.save()
        response.status(201).json(employee)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

const updateEmployee = async(request,response)=>{
    if(request.body.name!=null){
        response.employee.name = request.body.name;
        response.employee.enrollmentDepartment = request.body.enrollmentDepartment;
        response.employee.enrollmentDate = request.body.enrollmentDate;
    }
    try{
        const updateEmployee = await response.employee.save()
        response.status(201).json(updateEmployee)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

const getEmployeeByID = (request,response)=>{
    response.status(200).json(response.employee)
}

const deleteEmployee = async(request,response)=>{
    try{
        await response.employee.deleteOne();
        response.json({message:`Deleted user ${response.employee.name}`})
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

async function getEmployee(request,response,next){
    let employee;
    try{
        employee = await employeeModel.findById(request.params.id)
        if(employee===null){
            response.status(404).send({message: `Cannot find user with is ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).send({message:error.message})
    }
    response.employee = employee;
    next();
}


module.exports = {getAllEmployees, addEmployee, updateEmployee, deleteEmployee, getEmployee, getEmployeeByID}