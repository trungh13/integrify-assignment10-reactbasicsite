import React from "react";
import styles from "./ComponentFlickr.css";
import FooterHeading from "./FooterHeading";
const flickrPhoto = [{}, {}, {}, {}, {}, {}, {}, {}];
const ComponentFlickr = () => {
  return (
    <div className={styles.ComponentFlickr}>
      <FooterHeading footerTitle="Flickr" />
      <div className={styles.flickrDiv}>
        {flickrPhoto.map((element, index) => (
          <div className={styles.flickrPhoto} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ComponentFlickr;
