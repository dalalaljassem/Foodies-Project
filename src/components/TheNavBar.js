import { NavLink } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TheNavBar() {
  return (
    <div className="navbar">
      <div className="logo">Foodies</div>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category">Categories</NavLink>
        <NavLink to="/recipe">Recipes</NavLink>
        <NavLink class="fa fa-user" id="right" to="/">
          Sign Up
        </NavLink>
        <NavLink id="right" to="/">
          Sign In
        </NavLink>
      </ul>
    </div>
  );
}
export default TheNavBar;
