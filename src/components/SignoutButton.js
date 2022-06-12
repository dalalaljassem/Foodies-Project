import React from "react";
import { Button } from "react-bootstrap";
import authStore from "../stores/authStore";

function SignoutButton() {
  return (
    <button className="button" onClick={authStore.signout}>
      Signout
    </button>
  );
}

export default SignoutButton;
