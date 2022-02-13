import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="navbar"
      className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="my portfolio" to="/">
          My Portfolio
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="about me"
            activeStyle={{ frontWeight: "bold" }}
            to="/about"
          >
            About Me
          </NavLink>
          <NavLink
            id="projects-tab"
            className="my projects"
            activateStyle={{ frontWeight: "bold" }}
            to="/projects"
          >
            My Projects
          </NavLink>
          <NavLink
            id="contact-tab"
            className="contact"
            activateStyle={{ frontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            id="cv-tab"
            className="CV"
            activateStyle={{ frontWeight: "bold" }}
            to="/CV"
          >
            My CV
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
