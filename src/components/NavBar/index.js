/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";

const NavBar = ({ title = "Title", links = [] }) => {
  return (
    <div className="navbar">
      <h4>{title}</h4>
      <ul>
        {links &&
          links
            .filter((item) => item.active)
            .map((item) => (
              <li key={item.title} className="navbar__link">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default NavBar;
