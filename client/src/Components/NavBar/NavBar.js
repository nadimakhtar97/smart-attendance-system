import React from 'react';
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

function NavBar() {
  return (
    <Flex alignItems='center' alignContent='center' bg="twitter.500" pt="15px" pb="15px" pr="30px" pl="30px">
      <Spacer/>
      <Spacer/>
      <Heading color='#FFFFFF'>Smart Attendance System</Heading>
      <Spacer/>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
        <Link to="/">
          <BreadcrumbLink color='#FFFFFF' as='div' isCurrentPage>Home</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <Link to="/teacher-login">
          <BreadcrumbLink color='#FFFFFF' as='div'>Teacher login</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <Link to="/student-login">
          <BreadcrumbLink color='#FFFFFF' as='div'>Student register</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  )
}

export default NavBar