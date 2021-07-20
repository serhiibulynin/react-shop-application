import React from "react";

import LaptopListItems from "./laptopListItems/LaptopListItems";

const LaptopList = ({ laptops }) => {
  return (
    <ul>
      {laptops.map((laptop) => (
        <LaptopListItems laptop={laptop} key={laptop.id} />
      ))}
    </ul>
  );
};

export default LaptopList;
