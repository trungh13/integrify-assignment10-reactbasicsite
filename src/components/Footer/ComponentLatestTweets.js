import React from "react";
import styles from "./ComponentLatestTweets.css";
import FooterHeading from "./FooterHeading";
const ComponentLatestTweets = () => {
  return (
    <div className={styles.ComponentLatestTweets}>
      <FooterHeading footerTitle="Latest Tweets" />
      <p><span>@Jaynesh</span> just submitted another great item on <span>#themeforest</span></p>
      <p className={styles.sub}>about 3 hours ago</p>
      
      <p><span>@Jaynesh</span> just submitted another great item on <span>#themeforest</span></p>
      <p className={styles.sub}>about 3 hours ago</p>
    </div>
  );
};

export default ComponentLatestTweets;
