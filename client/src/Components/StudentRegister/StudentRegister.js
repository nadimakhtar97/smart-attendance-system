import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import { Button, Center, Flex } from '@chakra-ui/react'
import StudentRegisterOne from './StudentRegisterOne';
import StudentRegisterTwo from './StudentRegisterTwo';
import StudentRegisterThree from './StudentRegisterThree';
import axios from 'axios';
import SubmissionPage from '../SubmissionPage/SubmissionPage';

function StudentRegister() {

    const [data, setData] = useState({
        "name": "",
        "rollNo":"",
        "enrollmentNo": "",
        "facultyNo": "",
        "email": "",
        "phoneNo": "",
        "courseName": "",
        "courseCode": "",
        "courseTeacher": "",
        "status": "absent"
    })



    const [currentStep, setCurrentStep] = useState(0)

    const makeRequest = async (formData) => {
        try{
            const response = await axios.post('http://localhost:8000/student/register', { "student": formData })
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }

    const handleNextStep = (newData, final = false) => {
        console.log(data)
        setData(prev => ({ ...prev, ...newData }))

        if(final){
            makeRequest(newData)
            setCurrentStep(prev => prev + 1)
            return
        }

        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }))
        setCurrentStep(prev => prev - 1)
    }

    const step = [
    <StudentRegisterOne next={handleNextStep} data={data} />, 
    <StudentRegisterTwo next={handleNextStep} prev={handlePrevStep} data={data} />, 
    <StudentRegisterThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    <SubmissionPage></SubmissionPage>
    ]

    

    return (
        <Center>
            {step[currentStep]}
        </Center>
    )
}

export default StudentRegister
