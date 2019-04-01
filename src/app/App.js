import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./Gallery.js";
import Landing from "./Landing.js";

class App extends Component {
  render() {
    return(
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route path="/gallery" component={Gallery}/>
      </Router>
    );
  }
}

export default App;
