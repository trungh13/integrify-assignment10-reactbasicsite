import React from "react";
import styles from "./Header.css";
import HeaderIMG from "../../assets/Header-img.png";
import BubbleTag from "../BubbleTag";

const Header = (props) => (
  <header>
    <div className="container">
      <img className={styles.HeaderImg} src={HeaderIMG} alt="" />
      <div className={styles.headerDescription}>
        <h1><span>Powerfully simple</span> with a <span>Squeeky clean</span> design </h1>
        <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
        <button>Learn more</button>
      </div>
      <BubbleTag type='header' renderText={() => <React.Fragment>Create a<span> powerful</span> solution now</React.Fragment>} buttonText="get started"/>
    </div>
  </header>
);
export default Header;
