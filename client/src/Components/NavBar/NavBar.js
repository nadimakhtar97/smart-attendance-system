import React, { useContext } from 'react';
import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';
import {
  Flex, Heading, Text, Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Spacer,
  Center
} from '@chakra-ui/react'
import { ApplicationContext } from '../Context/ApplicationContext';

function NavBar() {

  const { isLoggedIn, setIsLoggedIn } = useContext(ApplicationContext)

  const logOutHandler = () => {
      setIsLoggedIn(false)
  }

  const logCondition = (
    isLoggedIn ? <Link to="/">
      <BreadcrumbLink onClick={logOutHandler} color='#FFFFFF' as='div'>Log out</BreadcrumbLink>
    </Link> : <Link to="/">
      <BreadcrumbLink color='#FFFFFF' as='div'>Log in</BreadcrumbLink>
    </Link>
  )

  return (
    <Flex alignItems='center' alignContent='center' bg="twitter.500" pt="15px" pb="15px" pr="30px" pl="30px">
      <Spacer />
      <Spacer />
      <Heading color='#FFFFFF'>Smart Attendance System</Heading>
      <Spacer />
      <Breadcrumb separator=' '>

        <BreadcrumbItem>
          <Link to="/home">
            <BreadcrumbLink color='#FFFFFF' as='div' isCurrentPage>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        {isLoggedIn ? <Link to="/student-register">
            <BreadcrumbLink color='#FFFFFF' as='div'>Student Registeration</BreadcrumbLink>
          </Link> : null }
        </BreadcrumbItem>

        <BreadcrumbItem>
          {logCondition}
        </BreadcrumbItem>

      </Breadcrumb>
    </Flex>
  )
}

export default NavBar