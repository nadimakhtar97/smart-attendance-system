import React from 'react';
import styles from '../TeacherLogin/TeacherLogin.module.css';
import { useFormik } from 'formik'

function TeacherLogin() {

    const formik = useFormik({

        initialValues: {
            "name": "",
            "enrollmentNo":"",
            "facultyNo":"",
            "courseName":"",
            "courseCode":"",
            "registrationMode":""
        },

        onSubmit: values => {
            console.log(values);
        }

    })


    return (
        <div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <label type="text" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="enrollmentNo">Enrollment No</label>
                <input type="text" id="enrollmentNo" name="enrollmentNo" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="facultyNo">Faculty No</label>
                <input type="text" id="facultyNo" name="facultyNo" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="facultyNo">Student Email</label>
                <input type="text" id="facultyNo" name="facultyNo" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="facultyNo">Student Phone No</label>
                <input type="text" id="facultyNo" name="facultyNo" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="facultyNo">Faculty No</label>
                <input type="text" id="facultyNo" name="facultyNo" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="courseName">Course Name</label>
                <input type="text" id="courseName" name="courseName" onChange={formik.handleChange} value={formik.values.name}></input>

                <label type="text" htmlFor="courseCode">Course Code</label>
                <input type="text" id="courseCode" name="courseCode" onChange={formik.handleChange} value={formik.values.password}></input>

                <label type="text" htmlFor="courseCode">Course Teacher Email</label>
                <input type="text" id="courseCode" name="courseCode" onChange={formik.handleChange} value={formik.values.password}></input>

                <label type="text" htmlFor="registrationMode">Mode of Registration</label>
                <input type="text" id="registrationMode" name="registrationMode" onChange={formik.handleChange} value={formik.values.password}></input>

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default TeacherLogin