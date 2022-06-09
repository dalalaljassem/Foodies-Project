import { NavLink } from "react-router-dom";
import React from "react";
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
      </div>
    </div>
  );
}
export default Nav;
