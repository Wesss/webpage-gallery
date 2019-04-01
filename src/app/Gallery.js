import React, { Component } from "react";
import NavBar from "compose/NavBar.js";
import Clock from "unit/Clock.js";
import './Gallery.css';

class Gallery extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div>
          <div className="testcontent">
            <br/>
            <div>Project is currently under catstruction~</div>
            <br/>
            <img className="CatImage" src="https://i.imgur.com/SisWrr0.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
