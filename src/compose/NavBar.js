import React, { Component } from "react";
import Button from "unit/Button";
import Link from "unit/Link";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <Link className="NavBar-link" exact activeClassName="NavBar-link-active" href={"/"}>
          Home
        </Link>
        <Link className="NavBar-link" activeClassName="NavBar-link-active" href={"/about"}>
          About
        </Link>
        <Link className="NavBar-link" activeClassName="NavBar-link-active" href={"/gallery"}>
          Gallery
        </Link>
      </div>
    );
  }
}

export default NavBar;
