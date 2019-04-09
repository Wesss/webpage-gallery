import React, { Component } from "react";
import NavBar from "compose/NavBar.js";
import ExhibitCard from "compose/ExhibitCard.js";
import Clock from "unit/Clock.js";
import MeetTheTeam from "app/exhibit/MeetTheTeam.js";
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
        title: "Meet the Team",
        component: <MeetTheTeam/>
      },
      {
        id: 2,
        title: "Stub",
        component: <Clock/>
      },
    ]

    var galleryRender = [];
    for (var i = 0; i < galleryConfig.length; i++) {
      var exhibit = galleryConfig[i];
      galleryRender = galleryRender.concat(this.renderExhibit(exhibit));
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
