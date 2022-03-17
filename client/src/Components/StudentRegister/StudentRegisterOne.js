import React from 'react';
import { Formik, Form } from 'formik'
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import {Button,Center,Flex} from '@chakra-ui/react'


function StudentRegisterOne(props) {



    const validationSchema = Yup.object({
        name:Yup.string().required('name is required'),
        rollNo: Yup.string().required('roll number is required'),
        enrollmentNo: Yup.string().required('enrollment number is required'),
        facultyNo:Yup.string().required('faculty number is required'),
        email:Yup.string().required('email is required').email("Invalid email format"),
        phoneNo:Yup.number().required().positive().integer()
    })

    const handleSubmit = values => {
        props.next(values)
    }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                (formik) => {
                    return (
                        <Center>
                        <Form style={{"width":"40vw","marginTop":"100px"}}>
                            <FormikControl control='input' label='Name' name='name' type='text'></FormikControl>
                            <FormikControl control='input' label='Roll No' name='rollNo' type='number'></FormikControl>
                            <FormikControl control='input' label='Enrollment No' name='enrollmentNo' type='text'></FormikControl>
                            <FormikControl control='input' label='Faculty No' name='facultyNo' type='text'></FormikControl>
                            <FormikControl control='input' label='Email' name='email' type='email'></FormikControl>
                            <FormikControl control='input' label='Phone No' name='phoneNo' type='number'></FormikControl>
                            <Button colorScheme='teal' type='submit' mt='20px' size='md'>Next</Button>
                        </Form>
                        </Center>
                    )
                }
            }
        </Formik>
  )
}

export default StudentRegisterOne