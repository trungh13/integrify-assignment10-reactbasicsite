import React from "react";
import styles from "./Feature.css";
const Feature = props => {
  return (
    <div className={[styles.FeaturedItem,styles[props.doActive]].join(" ")}>
      <img src={props.featureImgSrc} alt="" />
      <h2>{props.featureHeader()}</h2>
      <p>{props.featureText}</p>
      <button>Read more</button>
    </div>
  );
};

export default Feature;
