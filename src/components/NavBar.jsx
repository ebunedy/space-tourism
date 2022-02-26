import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mainNavigation } from "../linksData";
import logo from "../assets/shared/logo.svg";

const NavBar = () => {
  const [active, setActive] = useState(0);
  const [showSideNav, setShowSideNav] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const checkActive = (id) => {
    mainNavigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
      } else {
        return;
      }
    });
  };
  const openSideBar = () => {
    setShowSideNav(!showSideNav);
    setAriaExpanded(!ariaExpanded);
  };
  return (
    <header className="primary-header flex">
      <div>
        <img
          src={logo}
          alt="space tourism logo"
          className="logo"
        />{" "}
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={openSideBar}
      >
        <span
          className="sr-only"
          aria-expanded={ariaExpanded ? "true" : "false"}
        >
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          navigation-visible={showSideNav ? "true" : "false"}
          className="primary-navigation underline-indicators flex"
        >
          {mainNavigation.map((nav) => {
            const { id, number, name, url } = nav;
            return (
              <li
                className={`${active === id ? "active" : ""} `}
                key={id}
                onClick={() => checkActive(id)}
              >
                <Link
                  className="uppercase text-white letter-spacing-2"
                  to={url}
                >
                  <span>{number}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
