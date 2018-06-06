import React from 'react'
import Card from './Card'
import styles from './CardWithImg.css'
const CardWithImg = (props) => {
  return (
    <div className={styles.Card}>
        <img className={styles.CardImg} src={props.CardImg} alt=""/>
        <Card cardHeader={props.parentProps} cardContent={props.parentProps}/>
    </div>
  )
}

export default CardWithImg
