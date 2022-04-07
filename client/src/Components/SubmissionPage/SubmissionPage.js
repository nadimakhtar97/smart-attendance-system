import { Flex,Button, Heading, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SubmissionPage() {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/home')
    }

  return (
    <Flex direction="column" justifyContent="center" mt='100px'>
        <Heading textAlign="center" mt='20px'>Thank You</Heading>
        <Heading textAlign="center" mt='50px'>Your application has been successfully submitted. Please go to home to continue.</Heading>
        <Center>
        <Button mt='50px' width="fit-content" colorScheme="twitter" onClick={onClickHandler}>Go to Home</Button>
        </Center>
    </Flex>
  )
}

export default SubmissionPage