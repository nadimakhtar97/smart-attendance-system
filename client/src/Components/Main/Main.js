import React from 'react';
import WebCam from '../WebCam/WebCam';
import StudentList from '../StudentList/StudentList';
import {Flex, Spacer} from '@chakra-ui/react'

function Main() {
  return (
    <Flex mt='150px' justifyContent='space-evenly'>
      <WebCam/>
      <StudentList/>
    </Flex>
  )
}

export default Main