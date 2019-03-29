import React, { Component } from "react";
import Clock from "unit/Clock.js";

class Gallery extends Component {
  render() {
    return(
      <div className="BasePage">
        <div className="BasePage-sideNav">
          <Clock/>
          <br/>
          <br/>
          side nav
        </div>
        <div className="BasePage-content">
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
