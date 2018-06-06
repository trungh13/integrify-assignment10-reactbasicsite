import React from "react";
import styles from "./DevelopmentDiv.css";

const DevelopmentDiv = props => {
  return (
    <div className={[styles.DevelopmentDiv, styles[props.active]].join(" ")}>
      <div>
        <h4>{props.devHeading}</h4>
        <p>{props.devContent}</p>
      </div>
      <div>
      <button>Read more</button>
      </div>
    </div>
  );
};

export default DevelopmentDiv;
