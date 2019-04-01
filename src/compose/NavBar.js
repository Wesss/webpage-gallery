import React, { Component } from "react";
import Button from "unit/Button";
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <Link className="NavBar-link" to={"/"}>
          Home
        </Link>
        <Link className="NavBar-link" to={"/gallery"}>
          Gallery
        </Link>
      </div>
    );
  }
}

export default NavBar;
