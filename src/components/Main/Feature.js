import React from "react";
import styles from "./Feature.css";
import FeaturedImg from './FeaturedImg'
const Feature = props => {
  return (
    <div className={[styles.FeaturedItem,styles[props.doActive]].join(" ")}>
      <FeaturedImg FeaturedImgClass={props.FeaturedImgClass}/>
      <h2 className={styles.featureHeading}>{props.featureHeader()}</h2>
      <p>{props.featureText}</p>
      <button>Read more</button>
    </div>
  );
};

export default Feature;
