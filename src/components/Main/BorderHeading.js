import React from 'react'
import styles from './BorderHeading.css'
const BorderHeading = (props) => {
  return (
    <div className={styles.BorderHeading}>
      {props.heading && <h2 className={styles.heading}>{props.heading}</h2>}
    </div>
  )
}

export default BorderHeading
