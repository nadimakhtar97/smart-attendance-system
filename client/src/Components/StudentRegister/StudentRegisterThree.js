import React, { useCallback, useState, useRef } from 'react';
import { Formik, Form } from 'formik'
import Webcam from "react-webcam";
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import { Button, Center, Flex, Box, Image, VStack, Heading, CircularProgress } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function StudentRegisterThree(props) {

    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState()
    const webcamRef = useRef(null);
    const [image, setImage] = useState([])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }





    const validationSchema = Yup.object({
        studentImage: Yup.string().required('student image is required')
    })


    const videoConstraints = {
        width: 720,
        height: 360,
        facingMode: "user"
    };

    const capture = useCallback(

        async () => {
            try {
                setIsLoading(true)
                const imageSrc = []
                for (let i = 0; i < 100; i++) {
                    imageSrc.push(webcamRef.current.getScreenshot())
                    await sleep(50)
                }
                setImage(imageSrc);
                const response = axios.post('http://localhost:5000/img', { "base64Images": imageSrc, "rollNo": props.data.rollNo })
                console.log(response)

                setResult(<Center m='20px'>
                    <Heading size='md'>Image capturing process has been completed. you can submit the form now.</Heading>
                </Center>)
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
                console.log(error)
            }

        },
        [webcamRef]
    );


    const handleSubmit = values => {
        props.next(values, true)
        setResult(
            <>
                <Center m='20px'>
                    <Heading size='md'>Form Has been successfully submitted. Please go to home to continue</Heading>
                </Center>
                <Center>
                    <Link to="/">
                        <Button size='md' width='fit-content' colorScheme="twitter" type='button'>Go to Home</Button>
                    </Link>
                </Center>
            </>
        )
    }

    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            {
                (formik) => {
                    return (
                        <VStack>
                            <Form style={{ "width": "40vw", "marginTop": "100px" }}>
                                <Flex direction='column' alignItems='center'>
                                    <Webcam
                                        mirrored={true}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        screenshotQuality={1}
                                        height={360}
                                        width={720}
                                        videoConstraints={videoConstraints}
                                    ></Webcam>
                                    <Button size='md' width='30%' mt='40px' colorScheme='twitter' onClick={() => { capture() }}>Capture</Button>
                                    <Box>
                                        <Button onClick={() => props.prev(formik.values)} size='md' width='fit-content' mt="30px" mr='20px' colorScheme="twitter" type="button">Back</Button>
                                        <Button size='md' width='fit-content' mt="30px" colorScheme="twitter" type='submit'>Submit</Button>
                                    </Box>
                                </Flex>

                            </Form>
                            {
                                isLoading ? (
                                    <VStack>
                                        <Center m='20px'>
                                            <Heading size='md'>Please wait !! image capturing is in process.</Heading>
                                        </Center>
                                        <Center>
                                            <CircularProgress isIndeterminate color='twitter.500' />
                                        </Center>
                                    </VStack>

                                ) : null
                            }

                            {!isLoading ?
                                <VStack>
                                    {result}
                                </VStack>
                                : null}
                        </VStack>
                    )
                }
            }
        </Formik>
    )
}

export default StudentRegisterThree