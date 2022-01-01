import React from "react";
import styles from "./Grid.module.css";
import GridBox from "./GridBox";

const Grid = () => {
  const boxes = [
    {
      src: "/",
      link: "/",
      name: "Activity Go",
      type: "Web App",
    },
    {
      src: "/",
      link: "/",
      name: "Saying Theatre Booking Online",
      type: "Web App",
    },
    {
      src: "/",
      link: "/",
      name: "Rhinoceros in Love",
      type: "Online Theatre",
    },
  ];
  return (
    <div className={`${styles.grid}`}>
      {boxes.map((item, index) => (
        <GridBox
          key={index}
          src={item.src}
          link={item.link}
          size={item.size}
          name={item.name}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Grid;
