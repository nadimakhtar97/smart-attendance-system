import React, { useContext } from 'react';
import styles from '../StudentList/StudentList.module.css';
import { ApplicationContext } from '../Context/ApplicationContext'

function StudentList() {

    const { students } = useContext(ApplicationContext)
    console.log(students);

    return (
        <div className={styles.studentList}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(student => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.status}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default StudentList