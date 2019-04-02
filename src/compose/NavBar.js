import React, { Component } from "react";
import Button from "unit/Button";
import NavLink from "unit/NavLink";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <NavLink className="NavBar-link" exact activeClassName="NavBar-link-active" to={"/"}>
          Home
        </NavLink>
        <NavLink className="NavBar-link" activeClassName="NavBar-link-active" to={"/gallery"}>
          Gallery
        </NavLink>
      </div>
    );
  }
}

//
export default NavBar;
