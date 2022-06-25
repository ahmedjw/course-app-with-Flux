import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          return isActive ? activeStyle : undefined;
        }}
        exact
        to="/"
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        style={({ isActive }) => {
          return isActive ? activeStyle : undefined;
        }}
        to="/courses"
      >
        Courses
      </NavLink>
      {" | "}
      <NavLink
        style={({ isActive }) => {
          return isActive ? activeStyle : undefined;
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;
