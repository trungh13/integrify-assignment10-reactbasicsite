import React from "react";
import styles from "./ComponentLatestPosts.css";
import FooterHeading from "./FooterHeading";
import LatestPost from "./LatestPost";
const LatestPosts = [
  { postTitle: "Lorem ipsum dolor sit amet consect"},
  { postTitle: "sed do elusmod lempar incididunt"},
  { postTitle: "ul labore et dolare magna sed do elusmod tempor"},
  { postTitle: "consectelur adipicing elf, sed do"}
];

const ComponentLatestPosts = () => {
  return (
    <div className={styles.ComponentLatestPosts}>
      <FooterHeading footerTitle="Latest Post" />
      {LatestPosts.map((element, index) => <LatestPost key ={index} postTitle={element.postTitle} />)}
    </div>
  );
};

export default ComponentLatestPosts;
