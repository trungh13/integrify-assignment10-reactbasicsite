import React from "react";
import Feature from "./Feature";
import styles from "./ComponentFeatured.css"
const featured = [
  {
    FeaturedImgClass: "fa fa-mobile fa-2x",
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
    FeaturedImgClass: "fa fa-desktop fa-2x",
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
    FeaturedImgClass: "fa fa-laptop fa-2x",
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
    FeaturedImgClass: "fa fa-recycle fa-2x",
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
          className={styles.FeatureItem}
          key={index}
          active={element.doActive}
          FeaturedImgClass={element.FeaturedImgClass}
          featureHeader={() => element.featureHeader}
          featureText={element.featureText}
        />
      ))}
    </div>
  );
};

export default ComponentFeatured;
