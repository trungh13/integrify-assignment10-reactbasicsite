import React from "react";
import ComponentFeatured from "./ComponentFeatured";
import ComponentRecentWork from "./ComponentRecentWork";
import ComponentTestimonals from "./ComponentTestimonals";
import ComponentDevelopment from "./ComponentDevelopment";
import BorderHeading from "./BorderHeading";
import BubbleTag from "../BubbleTag"


const Main = () => (
  <main>
    <BorderHeading />
    <div className="container">
      <div className={styles.MainContainer}>
      <ComponentFeatured />
      <ComponentRecentWork />
      <ComponentTestimonals />
      <ComponentDevelopment />
      <BubbleTag type='main' renderText={() => <React.Fragment>Get in touch with us <span>now!</span></React.Fragment>} buttonText="Contact us"/>
      </div>
    </div>
  </main>
);
export default Main;
