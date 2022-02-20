
import React from 'react';
import styles from '../Button/Button.module.css';


function Button(props) {
  return (
    <button className={styles.button} onClick={props.click} role="button">Capture</button>
  )
}

export default Button




