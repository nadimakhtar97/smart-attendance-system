import React, { useContext } from 'react';
import { Formik, Form } from 'formik'
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import { Button, Center, Flex, Heading, Spacer, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ApplicationContext } from '../Context/ApplicationContext';


function TeacherLogin(props) {


    const { setIsLoggedIn, setTeacherName } = useContext(ApplicationContext)
    const navigate = useNavigate()
    const initialValues = {
        "username": "",
        "password": ""
    }

    const validationSchema = Yup.object({
        username: Yup.string().required().label('Username is required'),
        password: Yup.string().required().label('Password is required'),
    })

    const handleSubmit = values => {
        console.log(values)
        setIsLoggedIn(true)
        setTeacherName(values.username)
        navigate('/home')

    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                (formik) => {
                    return (
                        <VStack>
                            
                            <Heading mt="100px">Welcome to Smart Attendance System. Please log in to continue.</Heading>
                            <Form style={{ "width": "20vw", "marginTop": "50px" }}>
                                <FormikControl control='input' label='Username' name='username' type='text'></FormikControl>
                                <FormikControl control='input' label='Password' name='password' type='password'></FormikControl>
                                <Button size='md' width='fit-content' mt="20px" colorScheme="twitter" type='submit'>Log In</Button>
                            </Form>
                        </VStack>
                    )
                }
            }
        </Formik>
    )
}

export default TeacherLogin





















// import React, { useContext } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import FormikControl from '../FormikControl/FormikControl';
// import * as Yup from 'yup'
// import { Flex, Button } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
// import { ApplicationContext } from '../Context/ApplicationContext';

// function TeacherLogin() {

//     const {setIsLoggedIn ,setTeacher } = useContext(ApplicationContext)
//     const navigate = useNavigate()
//     const initialValues = {
//         "username": "",
//         "password": ""
//     }

//     const onSubmit = values => {

//         console.log(values)
//         setIsLoggedIn(true)
//         setTeacher(values.username)
//         navigate('/home')

//     }

//     const validationSchema = Yup.object({
//         name: Yup.string().required('username is required'),
//         password: Yup.string().required('password is required')
//     })


//     return (

//         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//             {
//                 (formik) => {
//                     return (
//                         <Flex justifyContent='center' mt='100px' minWidth='50%'>
//                             <Form>
//                                 <FormikControl control='input' label='Username' name='username' type='text'></FormikControl>
//                                 <FormikControl control='input' label='Password' name='password' type='password'></FormikControl>
//                                 <Button type='submit' colorScheme='twitter' mt='20px' size='md'>Log In</Button>
//                             </Form>
//                         </Flex>
//                     )
//                 }
//             }
//         </Formik>

//     )
// }

// export default TeacherLogin