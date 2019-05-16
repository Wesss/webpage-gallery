import React, { Component } from "react";
import Headline from "unit/Headline.js";
import Paragraph from "unit/Paragraph.js";
import "./HelloWorld.css";

class HelloWorld extends Component {
  render() {
    return(
      <div class="HelloWorld">
        <Headline level={1}>
          HELLO WORLD!
        </Headline>
        <Paragraph>
          It works! Hooray!
        </Paragraph>
      </div>
    );
  }
}

export default HelloWorld;
