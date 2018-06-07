import React from "react";
import styles from "./BubbleTag.css";
const componentName = props => {
  return (
    <div className={[styles.BubbleTag, styles[props.type]].join(" ")}>
      <h2>{props.renderText()}</h2>
      <button className={styles.BubbleButton}>{props.buttonText}</button>
    </div>
  );
};

export default componentName;
