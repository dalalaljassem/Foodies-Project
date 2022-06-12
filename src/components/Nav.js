import { NavLink } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Nav() {
  return (
    <div>
      <div>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
        <NavLink to="/category">
          <a>Category</a>
        </NavLink>
        <NavLink to="/recipe">Recipe</NavLink>
        <NavLink class="fa fa-user" id="right" to="/">
          Sign Up
        </NavLink>
        <NavLink id="right" to="/">
          Login
        </NavLink>
      </div>
    </div>
  );
}
export default Nav;
