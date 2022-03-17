const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name:{type:String,required:true},
    rollNo: {type:Number,required:true},
    enrollmentNo:{type:String,required:true,unique:true},
    facultyNo:{type:String,require:true,unique:true},
    email:{type:String,required:true,unique:true},
    phoneNo:{type:Number,required:true,unique:true},
    courseName: {type:String,required:true},
    courseCode: {type:String,required:true},
    courseTeacher: {type:String,required:true},
    status:{type:String,required:true}
},{
    collection:'students' 
});



module.exports = mongoose.model('studentSchema',studentSchema);