import React, { useState } from "react";
import { numberNavigation } from "../linksData";
import { data } from "../data";

const Technology = () => {
  const [active, setActive] = useState(0);
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const crew = data.technology[technologyIndex];
  const { name, images, description } = crew;

  const checkSelected = (id) => {
    numberNavigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
        setTechnologyIndex(id);
      } else {
        return;
      }
    });
  };

  return (
    <main id="main" className="grid-container grid-container--technology">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>
      <img src={images.landscape} alt={name} />

      <div className="flex content-tabs-container flow">
      <div className="number-indicator flex">
        {numberNavigation.map((item) => {
          const { id, name } = item;
          return (
            <button
              className={`${active === id ? "number-indicator-selected" : ""}`}
              key={id}
              onClick={() => checkSelected(id)}
            >
              <span>{name}</span>
            </button>
          );
        })}
      </div>

      <article className="technology-info ">
        <p className="fs-300 uppercase ff-serif">The terminology...</p>
        <h2 className="fs-700 uppercase ff-serif">{name}</h2>

        <p>{description}</p>
      </article>
      </div>
    </main>
  );
};

export default Technology;
