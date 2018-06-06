import React from "react";
import styles from "./ComponentTestimonals.css";
import Card from "./Card";
import BorderHeading from "./BorderHeading";
const testimonals = [
  {
    name: "John Smith",
    testimonal:
      '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor"'
  },
  {
    name: "John Smith",
    testimonal:
      '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor"'
  },
  {
    name: "John Smith",
    testimonal:
      '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor"'
  },
  {
    name: "John Smith",
    testimonal:
      '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor"'
  }
];

const ComponentTestimonal = () => {
  return (
    <div className={styles.ComponentTestimonal}>
      <BorderHeading heading="Testimonals" />
      <div className={styles.ComponentTestimonals}>
        {testimonals.map((element, index) => (
          <Card
            key={index}
            cardHeader={element.name}
            cardContent={element.testimonal}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentTestimonal;
