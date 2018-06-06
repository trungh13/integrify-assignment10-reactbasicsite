import React from "react";
import styles from "./Card.css";

const Card = props => {
  return (
    <div className={styles.Card}>
      <h3>{props.cardHeader}</h3>
      <p>{props.cardContent}</p>
    </div>
  );
};
export default Card;
