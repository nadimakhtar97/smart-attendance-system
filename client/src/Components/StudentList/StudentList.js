import React, { useContext,useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Flex,
    Heading,
    Center,
    Text,
    Spacer
} from '@chakra-ui/react'
import { ApplicationContext } from '../Context/ApplicationContext'
import axios from 'axios';

function StudentList() {

    const {students,setStudents} = useContext(ApplicationContext)

    useEffect(async() => {
        try {
          const ress = await axios.get('http://localhost:8000/db/init')
          const res = await axios.get('http://localhost:8000/student/students')
          console.log(res.data)
          setStudents(res.data)
        } catch (error) {
          console.log(error)
        }
      },[])

      console.log(students)

    return (
        <Flex direction='column'>
            <Center borderBottom='1px'>
            <Text >Nadim Akhtar</Text>
            <Spacer/>
            <Text>{new Date().toLocaleString()}</Text>
            </Center>
            <Table colorScheme='blue.500' mt='20px'>
                <TableCaption color='black.500' placement='bottom'>students attendance table</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Enrollment No</Th>
                        <Th>faculty No</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {students.map(student => {
                        return (
                            <Tr key={student._id}>
                                <Td>{student.rollNo}</Td>
                                <Td>{student.name}</Td>
                                <Td>{student.enrollmentNo}</Td>
                                <Td>{student.facultyNo}</Td>
                                <Td>{student.status}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>

            </Table>
        </Flex>
    )
}

export default StudentList