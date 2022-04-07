import React from 'react';
import { Formik, Form } from 'formik'
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import { Button, Center, Flex } from '@chakra-ui/react'


function StudentRegisterTwo(props) {


    const validationSchema = Yup.object({
        courseName: Yup.string().required().label('Course Name required'),
        courseCode: Yup.string().required().label('Course Code required'),
        courseTeacher: Yup.string().required().label('Course Teacher required')
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
                            <Form style={{ "width": "20vw", "marginTop": "100px" }}>
                                <FormikControl control='input' label='Course Name' name='courseName' type='text'></FormikControl>
                                <FormikControl control='input' label='Course Code' name='courseCode' type='text'></FormikControl>
                                <FormikControl control='input' label='Course Teacher' name='courseTeacher' type='text'></FormikControl>
                                <Button onClick={() => props.prev(formik.values)}size='md' width='fit-content' mt="20px" mr='20px' colorScheme="twitter" type="button">Back</Button>
                                <Button size='md' width='fit-content' mt="20px" colorScheme="twitter" type='submit'>Next</Button>
                            </Form>
                        </Center>
                    )
                }
            }
        </Formik>
    )
}

export default StudentRegisterTwo