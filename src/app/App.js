import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from "./Gallery.js";
import Landing from "./Landing.js";
import Link from "unit/Link";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route path="/gallery" component={Gallery}/>
        <Link href="http://www.google.com">Test</Link>
        <Link href="/gallery">Test</Link>
        <Link href="/">Test</Link>
      </BrowserRouter>
    );
  }
}

export default App;
