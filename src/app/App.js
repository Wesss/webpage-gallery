import React, { Component } from "react";
import Headline from "./Headline.js";
import Button from "./Button.js";
import Clock from "./Clock.js";
import "./App.css"

const NAV_STATE = {
  LANDING: "landing",
  GALLERY: "gallery"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {navState: NAV_STATE.LANDING};
  }

  clickViewGallery = () => {
    this.setState({navState: NAV_STATE.GALLERY});
  }

  render() {
    switch (this.state.navState) {
      case NAV_STATE.LANDING:
        return(
          <div className="Landing">
            <div className="Landing-focus">
              <Headline level={2} inverted={true}>
                Wesley Cox
              </Headline>
              <Headline level={1} inverted={true}>
                Software Developer
              </Headline>
              <Button inverted={true} onClick={this.clickViewGallery}>
                View Gallery
              </Button>
            </div>
          </div>
        );
        break;
      case NAV_STATE.GALLERY:
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
        break;
    }
    /*

    */
  }
}

export default App;
