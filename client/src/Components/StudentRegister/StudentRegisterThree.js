import React, { useCallback, useState, useRef } from 'react';
import { Formik, Form } from 'formik'
import Webcam from "react-webcam";
import FormikControl from '../FormikControl/FormikControl'
import * as Yup from 'yup'
import { Button, Center, Flex, Box, Image } from '@chakra-ui/react'
import axios from 'axios';


function StudentRegisterThree(props) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    const webcamRef = useRef(null);
    const [image, setImage] = useState([])


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

                const imageSrc = []
                for (let i = 0; i < 100; i++) {
                    imageSrc.push(webcamRef.current.getScreenshot())
                    // await sleep(100)
                }
                setImage(imageSrc);
                const response = axios.post('http://localhost:5000/img',{"base64Images":imageSrc,"rollNo":props.data.rollNo})
                console.log(response)

            } catch (error) {
                console.log(error)
            }

        },
        [webcamRef]
    );


    const handleSubmit = values => {
        props.next(values, true)
    }

    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            {
                (formik) => {
                    return (
                        <Center>
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
                                    <Button size='md' width='40%' mt='40px' colorScheme='blue' onClick={() => { capture() }}>Capture</Button>
                                    <Box>
                                        <Button onClick={() => props.prev(formik.values)} ml='30px' mr='10px' colorScheme='teal' type='button' mt='15px' size='md'>Back</Button>
                                        <Button colorScheme='teal' type='submit' mt='15px' size='md'>Submit</Button>
                                    </Box>
                                </Flex>
                                {/* {image ? <Image boxSize='md' mt='10px' ml='30px' fit='contain' height='fit-content' src={image}/> : null} */}
                            </Form>
                        </Center>
                    )
                }
            }
        </Formik>
    )
}

export default StudentRegisterThree