import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from '../Layout/Layout.module.css';
import Main from '../Main/Main'
import TeacherLogin from '../TeacherLogin/TeacherLogin';
import StudentLogin from '../StudentLogin/StudentLogin';
import StudentRegister from '../StudentRegister/StudentRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';

function Layout() {
  return (
    <Router>
      <div className={styles.Layout}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/teacher-login" element={<TeacherLogin/>}></Route>
          <Route path="/student-login" element={<StudentRegister/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default Layout