import React from "react";
import styles from "./Card.css";

const Card = props => {
  return (
    <div className={styles.Card}>
      {props.CardImg && (
        <img className={styles.CardImg} src={props.CardImg} alt="" />
      )}
      <div className={styles.cardContent}>
        <h3>{props.cardHeader}</h3>
        <p>{props.cardContent}</p>
      </div>
    </div>
  );
};
export default Card;
