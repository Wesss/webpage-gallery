import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./Gallery.js";
import Landing from "./Landing.js";
import NavLink from "unit/NavLink";

class App extends Component {
  render() {
    return(
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route path="/gallery" component={Gallery}/>
        <NavLink to="/">Test</NavLink>
        <NavLink to="/gallery">Test</NavLink>
      </Router>
    );
  }
}

export default App;
