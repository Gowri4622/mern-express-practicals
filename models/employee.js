const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    enrollmentDepartment:{
        type:String,
        required:true
    },
    enrollmentDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model('employeeModel1',employeeSchema)
