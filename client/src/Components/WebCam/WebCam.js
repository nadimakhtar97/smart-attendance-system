import React, { useState, useRef, useCallback, useContext } from 'react'
import Webcam from "react-webcam";
import styles from "../WebCam/WebCam.module.css";
import axios from 'axios'
import { Button, Box, Image, Flex, Text, CircularProgress, Center, VStack, Heading } from '@chakra-ui/react'
import { ApplicationContext } from '../Context/ApplicationContext';

function WebCam() {

    const {students,setStudents} = useContext(ApplicationContext)
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState()
    const videoConstraints = {
        width: 720,
        height: 360,
        facingMode: "user"
    };

    const webcamRef = useRef(null);
    const capture = useCallback(
        async () => {
            try {
                setIsLoading(true)
                const imageSrc = webcamRef.current.getScreenshot();
                setImage(imageSrc);
                const response = await axios.post('http://localhost:8000/face/identify', { "base64image": imageSrc })
                const {data} = await axios.get('http://localhost:8000/student/students')
                if(response.data.name == -1){
                    setResult(<Heading size='md'>Sorry no face detected !! please try again !!</Heading>)
                }else{
                    setResult(<Heading size='md'> Welcome {response.data.name} to the class. Your attendance has been marked</Heading>)
                }
                console.log(response)
                console.log(data)
                setStudents(data)
                setIsLoading(false)
            }
            catch (error) {
                setResult(<Heading size='md'>Some error occured please check!!</Heading>)
                setIsLoading(false);
                console.error("This is an error",error)
            }

        },
        [webcamRef]
    );
    return (
        <Flex justifyContent='center' alignItems='center' alignContent='space-between' direction='column'>
            <Box borderRadius='3xl'>
            <Webcam
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                screenshotQuality={1}
                height={360}
                width={720}
                videoConstraints={videoConstraints}
            ></Webcam>
            </Box>
            <Button size='md' width='40%' m='40px' colorScheme="twitter" onClick={() => { capture() }}><Text>Capture</Text></Button>
            {
                isLoading ? (
                    <VStack>
                        <Center m='20px'>
                            <Heading size='md'>Please wait face recognition is under process</Heading>
                        </Center>
                        <Center>
                            <CircularProgress isIndeterminate color='twitter.500' />
                        </Center>
                    </VStack>

                ) : null
            }

            { !isLoading ? <Center mt='20px'>
                {result}
            </Center> : null}

            {/* {image ? <Box>
                <Image src={image}/>
            </Box> : null} */}
        </Flex>

    )
}

export default WebCam