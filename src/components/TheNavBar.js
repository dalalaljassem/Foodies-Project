import { NavLink } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import authStore from "../stores/authStore";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import { observer } from "mobx-react-lite";
import SignoutButton from "./SignoutButton";

function TheNavBar() {
  console.log(authStore.user);
  return (
    <div className="navbar">
      <div className="logo">Foodies</div>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category">Categories</NavLink>
        <NavLink to="/recipe">Recipes</NavLink>

        {/* <NavLink class="fa fa-user" id="right" to="/">

          Sign Up
        </NavLink>
        <NavLink id="right" to="/">
          Sign In
        </NavLink> */}

        {authStore.user ? (
          <>
            <SignoutButton />
            <h6 className="name">Hello {authStore.user.name}</h6>
          </>
        ) : (
          <>
            <SignupModal />
            <SigninModal />
          </>
        )}
        {/* <NavLink class="fa fa-user" id="right" to="/">
          <SignupModal />
        </NavLink>
        <NavLink id="right" to="/">
          <SigninModal />
        </NavLink> */}
        {/* <NavLink>
          {authStore.user ? (
            <h1 style={{ color: "white" }}>Hello {authStore.user.name}</h1>
          ) : (
            //  && ( <signoutModal /> )
            <>
              <SignupModal />
              <SigninModal />
            </>
          )}
        </NavLink> */}
      </ul>
    </div>
  );
}
export default observer(TheNavBar);
