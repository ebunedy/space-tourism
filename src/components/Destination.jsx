import React, { useState } from "react";
import { tabsNavigation } from "../linksData";
import data from "../data.json";

const Destination = () => {
  const [active, setActive] = useState(0);
  const [destinationIndex, setDestinationIndex] = useState(0);

  const destination = data.destinations[destinationIndex];
  const { name, images } = destination;

  const checkSelected = (id) => {
    tabsNavigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
        setDestinationIndex(id);
      } else {
        return;
      }
    });
  };
  console.log(images.png);
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>

      <img src={images.png} alt={`Planet ${name}`} />

      <div className="tab-list underline-indicators flex">
        {tabsNavigation.map((item, index) => {
          const { id, name } = item;
          return (
            <button
              key={id}
              className={`${
                active === id ? "tab-selected" : ""
              } uppercase ff-sans-cond text-accent bg-dark letter-spacing-2`}
              onClick={() => checkSelected(id)}
            >
              {name}
            </button>
          );
        })}
      </div>

      <article className="destination-info ">
        <h2 className="fs-800 uppercase ff-serif">{name}</h2>

        <p>{destination.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
