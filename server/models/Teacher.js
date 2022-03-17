const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({

    name: {type:String,required:true},
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    registeredStudents:{type:[]}

},{collection:'teacher'});

const model = mongoose.model('Teacher',TeacherSchema);

module.exports = model;