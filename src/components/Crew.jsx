import React, { useState } from "react";
import { dotsNavigation } from "../linksData";
import { data } from "../data";

const Crew = () => {
  const [active, setActive] = useState(0);
  const [crewIndex, setCrewIndex] = useState(0);

  const crew = data.crew[crewIndex];
  const { role, name, images, bio } = crew;

  const checkSelected = (id) => {
    dotsNavigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
        setCrewIndex(id);
      } else {
        return;
      }
    });
  };

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex">
        {dotsNavigation.map((item) => {
          const { id, name } = item;
          return (
            <button
              className={`${active === id ? "dot-selected" : ""}`}
              key={id}
              onClick={() => checkSelected(id)}
            >
              <span className="sr-only">{name}</span>
            </button>
          );
        })}
      </div>

      <article className="crew-details flow">
        <div>
          <h2 className="fs-600 ff-serif uppercase">{role}</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </div>
        <p>{bio}</p>
      </article>

      <img src={images.png} alt="Douglas Hurley" />
    </main>
  );
};

export default Crew;
