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
    <Flex align='baseline'>
      <Spacer/>
      <Spacer/>
      <Heading color='#333'>Smart Attendance System</Heading>
      <Spacer/>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
        <Link to="/">
          <BreadcrumbLink  isCurrentPage>Home</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <Link to="/teacher-login">
          <BreadcrumbLink as='div'>Teacher login</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <Link to="/student-login">
          <BreadcrumbLink as='div'>Student register</BreadcrumbLink>
        </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  )
}

export default NavBar