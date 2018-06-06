import React from "react";
import styles from "./ComponentAboutUs.css";
import FooterHeading from "./FooterHeading";
const ComponentAboutUs = () => {
  return (
    <div className={styles.ComponentAboutUs}>
      <FooterHeading footerTitle="About Us" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <br/>
      <p>54 Awesome street</p>
      <p>Awesome Road</p>
      <p>Awesome City</p>
      <p>(123) 456 - 789</p>
    </div>
  );
};

export default ComponentAboutUs;
