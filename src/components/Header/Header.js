import React from "react";
import styles from "./Header.css";
import HeaderIMG from "../../assets/Header-img.png";

const Header = () => (
  <header>
    <div className="container">
      <img className={styles.headerIMG} src={HeaderIMG} />
      <h1>where is my header ?</h1>
    </div>
  </header>
);
export default Header;
