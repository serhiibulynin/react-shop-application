import React from "react";

const LaptopListItems = ({ laptop }) => {
  return (
    <ul>
      <li>
        <h3>{laptop.name}</h3>
        <img src={laptop.image} alt={laptop.name} />
        <p>
          Sale:{" "}
          {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p>{laptop.description}</p>
        <p>
          Цена: <span>{laptop.price}</span>
        </p>
      </li>
    </ul>
  );
};

export default LaptopListItems;
