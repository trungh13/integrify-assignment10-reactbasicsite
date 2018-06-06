import React from "react";
import styles from "./LatestPost.css";
const LatestPost = props => (
  <p className={[styles.LatestPost,styles[props.active]].join(' ')}>{props.postTitle}</p>
);

export default LatestPost;
