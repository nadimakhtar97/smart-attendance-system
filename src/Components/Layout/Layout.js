import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from '../Layout/Layout.module.css';
import Main from '../Main/Main'

function Layout() {
  return (
    <div className={styles.Layout}>
        <NavBar></NavBar>
        <Main></Main>
    </div>
  )
}

export default Layout