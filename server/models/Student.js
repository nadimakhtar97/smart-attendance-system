const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNo:{type:String,required:true,unique:true},
    enrollNo:{type:String,required:true,unique:true},
    facultyNo:{type:String,require:true,unique:true},
    courseEnrolled:[],
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true}

},{collection:'students'});

const model = mongoose.model('StudentSchema',StudentSchema);

module.exports = model;