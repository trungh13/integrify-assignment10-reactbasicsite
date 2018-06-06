import React from "react";
import styles from "./ComponentDevelopment.css";
import DevelopmentDiv from "./DevelopmentDiv";
import BorderHeading from "./BorderHeading";
const devsDiv = [
  {
    devTitle: "Design",
    devHeading: "Design",
    devContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor ut labore et dolore magna sed
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor`,
    active: "active"
  },
  {
    devTitle: "Production",
    devHeading: "Production",
    devContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor ut labore et dolore magna sed
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor`,
    active: ""
  }
];

const ComponentDevelopment = () => {
  return (
    <div className={styles.ComponentDevelopment}>
      <BorderHeading heading="Development" />
      <div className={styles.DevelopmentDivHeading}>
        {devsDiv.map((element, index) => (
          <div key={index} 
            className={styles[element.active]}>{element.devTitle}</div>
        ))}
      </div>
      <div className={styles.DevelopmentDivContent}>
        {devsDiv.map((element, index) => (
          <DevelopmentDiv
            key={index}
            active={element.active}
            devHeading={element.devHeading}
            devContent={element.devContent}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentDevelopment;
