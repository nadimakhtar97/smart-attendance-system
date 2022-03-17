import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormikControl from '../FormikControl/FormikControl';
import * as Yup from 'yup'
import {Flex, Button} from '@chakra-ui/react'

function TeacherLogin() {
  const initialValues = {
    "email": "",
    "password": ""
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
  email:Yup.string().required('email is required').email('invalid email format'),
  password: Yup.string().required('password is required')
})

return (

    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {
            (formik) => {
                return (
                    <Flex justifyContent='center' mt='100px' minWidth='50%'>
                    <Form>
                        <FormikControl control='input' label='Email' name='email' type='email'></FormikControl>
                        <FormikControl control='input' label='Password' name='password' type='password'></FormikControl>
                        <Button type='submit' colorScheme='teal' mt='20px' size='md'>Submit</Button>
                    </Form>
                    </Flex>
                )
            }
        }
    </Formik>

)
}

export default TeacherLogin