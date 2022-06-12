import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
// import "./NavMenu.css";

const Navigation = (props) => {
  const { oidc } = props;
  const userLoggedIn = oidc.user;

  return (
    <Navbar inverse fixedTop fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={"/"}>React Redux Azure AD</Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      {oidc.user ? (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login">
              {oidc.user ? oidc.user.profile.unique_name : ""}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      ) : null}
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={"/"} exact>
            <NavItem>
              <i fa fa-home /> Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to={"/counter"}>
            <NavItem>
              <i fa fa-education /> Counter
            </NavItem>
          </LinkContainer>
          <LinkContainer to={"/fetchdata"}>
            <NavItem>
              <i fa fa-th-list /> Fetch data
            </NavItem>
          </LinkContainer>
          {!userLoggedIn ? (
            <LinkContainer to={"/login"}>
              <NavItem>
                <i fa fa-edit /> Login
              </NavItem>
            </LinkContainer>
          ) : (
            <LinkContainer to={"/logout"}>
              <NavItem>
                <i fa fa-edit /> Logout
              </NavItem>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    oidc: state.oidc,
  };
}

export default connect(mapStateToProps)(Navigation);
