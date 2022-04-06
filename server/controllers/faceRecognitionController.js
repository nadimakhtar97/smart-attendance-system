const { default: axios } = require("axios");
const { json } = require("express");
const mongoose = require("mongoose")
const Student = require('../models/Student')

exports.identify = async (req,res)=>{

    try {

    // console.log(req.body);
    const response = await axios.post('http://localhost:5000/identify', { "base64image": req.body.base64image })
    const roll = response.data.id
    console.log("This is roll number = ",roll)
    if(roll === -1){	
        res.json({name : -1})
    }else if(roll === -2){
        res.json({name : -2})
    }
    else{
        var today = new Date();  
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const student = await Student.findOneAndUpdate({"rollNo" : roll},{status:"present",inTime:time},{returnDocument:"after"})
        const students = await Student.find({"rollNo":roll})
        // console.log(students)
        console.log("This is student",student)
        res.json(student)
    }
    
        
    } catch (error) {
        console.log(error)
    }
    
}


