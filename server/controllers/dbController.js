const { json } = require("express");
const mongoose = require("mongoose")
const Student = require('../models/Student');


exports.init = async(req,res) =>{
    const students = await Student.updateMany({},{status:"absent"})
    res.json(students)
}



