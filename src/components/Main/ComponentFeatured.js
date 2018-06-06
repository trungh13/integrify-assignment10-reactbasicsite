import React from "react";
import Feature from "./Feature";
import styles from "./ComponentFeatured.css"
const featured = [
  {
    featureImgSrc: "#",
    featureHeader: (
      <React.Fragment>
        <span>Superbly </span>responsive
      </React.Fragment>
    ),
    featureText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet…",
    doActive: "no"
  },
  {
    featureImgSrc: "#",
    featureHeader: (
      <React.Fragment>
        <span>Squeeky </span>clean
      </React.Fragment>
    ),
    featureText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet…",
      doActive: "no"
  },
  {
    featureImgSrc: "#",
    featureHeader: (
      <React.Fragment>
        <span>Multi </span>purpose
      </React.Fragment>
    ),
    featureText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet…",
      doActive: "active"
  },
  {
    featureImgSrc: "#",
    featureHeader: (
      <React.Fragment>
        <span>Highly </span>flexible
      </React.Fragment>
    ),
    featureText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet…",
      doActive: "no"
  }
];
const ComponentFeatured = props => {
  return (
    <div className={styles.ComponentFeatured}>
      {featured.map((element, index) => (
        <Feature
          key={index}
          active={element.doActive}
          featureImgSrc={element.featureImgSrc}
          featureHeader={() => element.featureHeader}
          featureText={element.featureText}
        />
      ))}
    </div>
  );
};

export default ComponentFeatured;
