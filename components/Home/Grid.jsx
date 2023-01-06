import React from "react";
import styles from "./Grid.module.scss";
import GridBox from "./GridBox";

import activityGo from "../../public/images/activitygo-thumbnail.png";
import saying from "../../public/images/theatrebooking-thumbnail.png";
import rhinoceros from "../../public/images/RhinocerosInLove.png";

const Grid = () => {
  const boxes = [
    {
      src: activityGo,
      link: "/coding/activity-go",
      name: "Activity Go",
      type: "Web App",
    },
    {
      src: saying,
      link: "/coding/theatre-booking-website",
      name: "Saying Theatre Booking Online",
      type: "Web App",
    },
    {
      src: rhinoceros,
      link: "/film",
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
          name={item.name}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Grid;
