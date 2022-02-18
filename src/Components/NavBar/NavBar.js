import React from 'react';
import styles from '../NavBar/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <span>SMART ATTENDANCE SYSTEM</span>
      <div className={styles.links}>
        <a href={''} className={styles.login}> Teacher Login </a>
        <a href={''} className={styles.login}> Student Login </a>
      </div>
    </div>
  )
}

export default NavBar