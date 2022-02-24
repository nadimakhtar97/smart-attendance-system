import React from 'react';
import styles from '../TeacherLogin/TeacherLogin.module.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'

function TeacherLogin() {


  const validationSchema = Yup.object({

    email: Yup.string().email('Invalid Email').required('Required!'),
    password: Yup.string().required('Required!')

  })

  const formik = useFormik({

    initialValues: {
      "email": "",
      "password": ""
    },

    onSubmit: values => {
      console.log(values);
    },

    validationSchema

  })



  return (
    <div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label type="email" htmlFor="email">email</label>
        <input type="email" id="email" name="email" {...formik.getFieldProps("email")}></input>
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label type="text" htmlFor="password">password</label>
        <input type="password" id="password" name="password" {...formik.getFieldProps("password")}></input>
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default TeacherLogin