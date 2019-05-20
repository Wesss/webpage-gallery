import React, { Component } from "react";
import Page from "compose/Page.js";
import ExhibitCard from "compose/ExhibitCard.js";
import HelloWorld from "app/exhibit/HelloWorld.js";
import MeetTheTeam from "app/exhibit/MeetTheTeam.js";
import TileRotations from "app/exhibit/TileRotations.js";
import './Gallery.css';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {openExhibit: this.getEmptyExhibit()};
  }

  getEmptyExhibit = () => {
    return {
      id: null
    }
  }

  clickExhibitPreview = (exhibit) => {
    return () => {
      this.setState((state) => {
        return state.openExhibit.id == exhibit.id ? {openExhibit: this.getEmptyExhibit()} : {openExhibit: exhibit};
      });
    }
  }

  renderExhibit = (exhibit) => {
    var render = [
      <div key={"exhibit-card-" + exhibit.id}
        className="Gallery-item"
        onClick={this.clickExhibitPreview(exhibit)}>
        <ExhibitCard>
          {exhibit.title}
        </ExhibitCard>
      </div>
    ];
    if (this.state.openExhibit.id == exhibit.id) {
      render.push(
        <div key={"exhibit-expanded-" + exhibit.id}
          className="Gallery-item Gallery-exhibit-expanded">
          {exhibit.component}
        </div>
      );
    }

    return render;
  }

  render() {
    // TODO abstract config out of this file, make an exhibit data class?
    const galleryConfig = [
      {
        id: 1,
        title: "Hello World",
        component: <HelloWorld/>
      },
      {
        id: 2,
        title: "Meet the Team",
        component: <MeetTheTeam/>
      },
      {
        id: 3,
        title: "Tile Rotations",
        component: <TileRotations/>
      },
    ]

    var galleryRender = [];
    for (var i = 0; i < galleryConfig.length; i++) {
      var exhibit = galleryConfig[i];
      galleryRender = galleryRender.concat(this.renderExhibit(exhibit));
    }
    return(
      <Page>
        <div className="Gallery">
          {galleryRender}
        </div>
      </Page>
    );
  }

}

export default Gallery;
