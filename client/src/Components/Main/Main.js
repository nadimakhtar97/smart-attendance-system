import React from 'react';
import styles from '../Main/Main.module.css';
import WebCam from '../WebCam/WebCam';
import StudentList from '../StudentList/StudentList';

function Main() {
  return (
    <div className={styles.main}>
        <WebCam></WebCam>
        <StudentList></StudentList>
    </div>
  )
}

export default Main