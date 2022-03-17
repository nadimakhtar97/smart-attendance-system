const { json } = require("express");
const mongoose = require("mongoose")
const Student = require('../models/Student')

exports.register = async(req,res) =>{
    const { student} = req.body;
    // console.log("This is a student",student);
    const new_student = new Student(student)
    const stu = await new_student.save();
    // console.log(stu);
    res.json({"status":"ok"})
}

exports.students = async (req,res)=>{
    const all_students = await Student.find();
    // console.log("This is all student",all_students)
    res.send(all_students);
}


