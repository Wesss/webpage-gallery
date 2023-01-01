import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from "./Gallery.js";
import Landing from "./Landing.js";
import About from "./About.js";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    );
  }
}

export default App;
