import React, { Component } from "react";
import NavBar from "compose/NavBar.js";
import Clock from "unit/Clock.js";
import './Gallery.css';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {openExhibit: null};
  }

  clickExhibitPreview = (index) => {
    return () => {
      this.setState((state) => {
        return state.openExhibit == index ? {openExhibit: null} : {openExhibit: index};
      });
    }
  }

  renderExhibitTiles = (index) => {
    var render = [
      <div
        key={"exhibit-preview-" + index}
        className="Gallery-exhibit"
        onClick={this.clickExhibitPreview(index)}>
        {index} click me
      </div>
    ];

    if (this.state.openExhibit == index) {
      render.push(
        <div key={"exhibit-" + index} className="Gallery-exhibit-expanded">
          {index} expanded
          <br/>
          <br/>
          <div>Project is currently under catstruction~</div>
          <br/>
          <img className="CatImage" src="https://i.imgur.com/SisWrr0.jpg"/>
        </div>
      );
    }

    return render;
  }

  render() {
    var galleryRender = [];
    for (var i = 0; i < 10; i++) {
      galleryRender = galleryRender.concat(this.renderExhibitTiles(i));
    }
    return(
      <div>
        <NavBar/>
        <div className="Gallery-body">
          <div className="Gallery">
            {galleryRender}
          </div>
        </div>
      </div>
    );
  }

}

export default Gallery;
