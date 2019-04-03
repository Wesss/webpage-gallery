import React, { Component } from "react";
import NavBar from "compose/NavBar.js";
import Clock from "unit/Clock.js";
import './Gallery.css';

class Gallery extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div className="Gallery-body">
          <div className="Gallery">
            <div className="Gallery-exhibit">
              1
            </div>
            <div className="Gallery-exhibit">
              2
            </div>
            <div className="Gallery-exhibit">
              3
            </div>
            <div className="Gallery-exhibit-expanded">
              3 expanded
              <br/>
              <br/>
              <div>Project is currently under catstruction~</div>
              <br/>
              <img className="CatImage" src="https://i.imgur.com/SisWrr0.jpg"/>
            </div>
            <div className="Gallery-exhibit">
              4
            </div>
            <div className="Gallery-exhibit">
              5
            </div>
            <div className="Gallery-exhibit">
              6
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Gallery;
