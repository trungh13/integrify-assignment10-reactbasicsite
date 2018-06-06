import React from "react";
import styles from './FooterLogo.css'
const FooterLogo = (props) => <i className={[props.logoName,styles.FooterLogo].join(" ")} />;

export default FooterLogo;
