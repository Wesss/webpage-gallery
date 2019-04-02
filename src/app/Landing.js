import React, { Component } from "react";
import Headline from "unit/Headline.js";
import Button from "unit/Button.js";
import "./Landing.css"

class Landing extends Component {
  render() {
    return(
      <div className="Landing">
        <div className="Landing-focus">
          <div className="u-marginsmall">
            <Headline level={2} inverted={true}>
              Wesley Cox
            </Headline>
            <Headline level={1} inverted={true}>
              Software Developer
            </Headline>
          </div>
          <Button linkTo={"/gallery"} inverted={true}>
            View Gallery
          </Button>
        </div>
      </div>
    );
  }
}

export default Landing;
