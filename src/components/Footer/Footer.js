import React from "react";
import styles from "./Footer.css"
import ComponentAboutUs from './ComponentAboutUs'
import ComponentLatestTweets from './ComponentLatestTweets'
import ComponentLatestPosts from './ComponentLatestPosts'
import ComponentFlickr from './ComponentFlickr'
import ComponentFooterCredit from "./ComponentFooterCredit";
const Footer = () => (
  <footer>
    <div className="container" >
      <ComponentAboutUs/>
      <ComponentLatestTweets/>
      <ComponentLatestPosts/>
      <ComponentFlickr/>
    </div>
    <ComponentFooterCredit/>
  </footer>
);
export default Footer;
