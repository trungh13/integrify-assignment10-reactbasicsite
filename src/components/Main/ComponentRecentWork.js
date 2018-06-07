import React from "react";
import Card from "./Card";
import styles from "./ComponentRecentWork.css";
import recentImgURL from "../../assets/img-placeholder.png";
import BorderHeading from "./BorderHeading"

const recentItem = [
  {
    recentImg: recentImgURL,
    recentTitle: "Blog Title",
    recentContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis suscipit quam, at elementum elit. Aliquam commodo commodo eros, at"
  },
  {
    recentImg: recentImgURL,
    recentTitle: "Blog Title",
    recentContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis suscipit quam, at elementum elit. Aliquam commodo commodo eros, at"
  },
  {
    recentImg: recentImgURL,
    recentTitle: "Blog Title",
    recentContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis suscipit quam, at elementum elit. Aliquam commodo commodo eros, at"
  }
];

const ComponentRecentWork = props => {
  return (
    <div className={styles.ComponentRecentWorks}>
      <BorderHeading heading="Recent works" />
      <div className={styles.ComponentRecentWork}>
        {recentItem.map((element, index) => (
          <Card
            key={index}
            CardImg={element.recentImg}
            cardHeader={element.recentTitle}
            cardContent={element.recentContent}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentRecentWork;
