import React, { useContext, useEffect, useState } from 'react';
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
    Spacer,
    VStack,
    Button,
    Box
} from '@chakra-ui/react'
import { ApplicationContext } from '../Context/ApplicationContext'
import axios from 'axios';
import FileDownload from 'js-file-download'

function StudentList() {

    const { students, setStudents } = useContext(ApplicationContext)

    useEffect(async () => {
        try {
            const ress = await axios.get('http://localhost:8000/db/init')
            const res = await axios.get('http://localhost:8000/student/students')
            console.log(res.data)
            setStudents(res.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleReportDownload = async () => {

        try {
            const res = await axios.get('http://localhost:8000/db/report', { responseType: "blob" })
            FileDownload(res.data, "Report.xlsx")
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }


    }
    console.log(students)

    return (
        <VStack>
            <Flex justifyContent="space-between" width="800px">
                <Box>
                <Text >Teacher Name: Nadim Akhtar</Text>
                </Box>
                <Box>
                <Text>Date: {new Date().toDateString()}</Text>
                </Box>
            </Flex>
            <Flex direction='column' overflowY="auto" maxHeight="350px" >
                <Table variant='striped' colorScheme="twitter" mt='20px' size="md">
                    <TableCaption color='black.500' placement='bottom'>Students Attendance Table</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Enrollment No</Th>
                            <Th>faculty No</Th>
                            <Th>Status</Th>
                            <Th>In Time</Th>
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
                                    <Td>{student.inTime}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Flex>
            <Center>
                <Button size='md' width='fit-content' m='40px' colorScheme='twitter' onClick={handleReportDownload}>Download Report</Button>
            </Center>
        </VStack>
    )
}

export default StudentList