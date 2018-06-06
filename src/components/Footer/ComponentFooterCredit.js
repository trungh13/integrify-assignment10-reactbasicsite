import React from "react";
import styles from "./ComponentFooterCredit.css";
import FooterLogo from "./FooterLogo";

const FooterLogos = [
  { logoName: "fa fa-twitter-square" },
  { logoName: "fa fa-facebook-square" },
  { logoName: "fa fa-vimeo-square" },
  { logoName: "fa fa-reddit-square" },
  { logoName: "fa fa-google-plus-square" },
  { logoName: "fa fa-pinterest-square" }
];

const ComponentFooterCredit = () => {
  return (
    <div className={styles.ComponentFooterCredit}>
      <div className={["container", styles.FooterCreditDiv].join(" ")}>
        <div className={styles.FooterCredit}>
          <p>Copyright © 2003-2012 Ventus Inc. all rights reserved.</p>{" "}
        </div>
        <div className={styles.FooterLogos}>
          {FooterLogos.map((element, index) => (
            <FooterLogo key={index} logoName={element.logoName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentFooterCredit;
