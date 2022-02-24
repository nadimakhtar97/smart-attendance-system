import React from 'react';
import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <span>SMART ATTENDANCE SYSTEM</span>
      <div className={styles.links}>
      <Link to="/">
          <span className={styles.login}> Home </span>
        </Link>
        <Link to="/teacher-login">
          <span className={styles.login}> Teacher Login </span>
        </Link>
        <Link to="/student-login">
          <span className={styles.login}> Student Login </span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar