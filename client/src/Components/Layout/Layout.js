import React, {useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import styles from '../Layout/Layout.module.css';
import Main from '../Main/Main'
import TeacherLogin from '../TeacherLogin/TeacherLogin';
import StudentLogin from '../StudentLogin/StudentLogin';
import StudentRegister from '../StudentRegister/StudentRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import FormikContainer from '../FormikContainer/FormikContainer';
import { Container, Flex, Spacer, Toast, useToast } from '@chakra-ui/react';
import axios from 'axios'



function Layout() {

  const toast = useToast();

  useEffect( async () => {
    try{
      const response = await axios.get('http://localhost:5000/train')
      toast({
        title: 'Application Ready.',
        position: 'top',
        description: "Now you can start using the application",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      console.log(response)
    }
    catch(err){
      toast({
        title: 'Some error occured',
        position:'top',
        description: "application is not ready !! please check server.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      console.error(err)
    }
  },[])
  

  return (
    <Router>
      <Flex width='100%' minHeight='100vh' direction='column' backgroundColor="gray.200" pt='30px' pl='30px' pr='30px'>
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/teacher-login" element={<TeacherLogin/>}></Route>
          <Route path="/student-login" element={<StudentRegister/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Flex>
    </Router>
  )
}

export default Layout