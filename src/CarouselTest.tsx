import React from "react";

import { Carousel } from "./../common";

export const Test = () => {
  return (
    <div>
      <Carousel
        images={[
          <img
            alt=""
            src="./name.jpeg"
            key="name"
            style={{ width: "100%", height: "100%" }}
          />,
          <img
            alt=""
            src="./age.jpeg"
            key="age"
            style={{ width: "100%", height: "100%" }}
          />,
          <img
            alt=""
            src="./sex.png"
            key="sex"
            style={{ width: "100%", height: "100%" }}
          />,
        ]}
      />
    </div>
  );
};
