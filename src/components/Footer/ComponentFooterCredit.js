import React from "react";
import styles from "./ComponentFooterCredit.css";
import FooterLogo from "./FooterLogo";

const FooterLogos = [
  { logoName: "fa fa-twitter-square fa-2x" },
  { logoName: "fa fa-facebook-square fa-2x" },
  { logoName: "fa fa-vimeo-square fa-2x" },
  { logoName: "fa fa-reddit-square fa-2x" },
  { logoName: "fa fa-google-plus-square fa-2x" },
  { logoName: "fa fa-pinterest-square fa-2x" }
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
