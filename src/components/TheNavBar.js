import { NavLink } from "react-router-dom";
import React from "react";

function TheNavBar() {
  return (
    <div className="navbar">
      <div className="logo">Foodies</div>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/recipe">Recipe</NavLink>
      </ul>
    </div>

    // <div>
    //   <div>
    //     <NavLink to="/">
    //       <a>Home </a>
    //     </NavLink>
    //     <NavLink to="/category">
    //       <a> Category </a>
    //     </NavLink>
    //     <NavLink to="/recipe">
    //       <a> Recipe</a>
    //     </NavLink>
    //   </div>
    // </div>
  );
}
export default TheNavBar;
