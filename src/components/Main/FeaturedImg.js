import React from 'react'
import styles from './FeaturedImg.css'
const FeaturedImg = (props) => <i className={[props.FeaturedImgClass, styles.FeaturedImg].join(" ")}></i>

export default FeaturedImg
