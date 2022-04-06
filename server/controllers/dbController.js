const { json } = require("express");
const mongoose = require("mongoose")
const Student = require('../models/Student');


exports.init = async(req,res) =>{
    const students = await Student.updateMany({},{status:"absent",inTime:""})
    res.json(students)
}


exports.report = async(req,res) =>{
    const rawStudentsData = await Student.find()
    const students = []
    rawStudentsData.forEach((student)=>{
        const col = {
            "Name":student.name,
            "Enroll Number": student.enrollmentNo,
            "Faculty Number": student.facultyNo,
            "Email": student.email,
            "Status": student.status,
            "In Time": student.inTime
        }
        students.push(col)
    })
    console.log("this is students = ",students)
    res.xls('data.xlsx', students);
}


