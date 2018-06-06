import React from 'react'
import styles from './FooterHeading.css'
const FooterHeading = (props) => {
  return (
    <React.Fragment>
      <h4 className={styles.FooterHeading}>{props.footerTitle}</h4>
    </React.Fragment>
  )
}

export default FooterHeading
