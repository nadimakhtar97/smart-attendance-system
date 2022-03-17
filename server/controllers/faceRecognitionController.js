const { default: axios } = require("axios");
const { json } = require("express");
const mongoose = require("mongoose")
const Student = require('../models/Student')

exports.identify = async (req,res)=>{

    try {

    // console.log(req.body);
    const response = await axios.post('http://localhost:5000/identify', { "base64image": req.body.base64image })
    const roll = response.data.id
    // console.log(roll)
    if(roll){
        const student = await Student.findOneAndUpdate({"rollNo" : roll},{status:"present"},{returnDocument:"after"})
        console.log(student)
        res.json(student)
    }else{
        res.json({name : -1})
    }
        
    } catch (error) {
        console.log(error)
    }
    
}


