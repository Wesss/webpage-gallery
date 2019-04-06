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
        <div>
          <span> Icons made by </span>
          <a href="https://www.flaticon.com/authors/google"
            title="Google"
            target="_blank">
            Google
          </a>
          <span> from </span>
          <a href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank">
            www.flaticon.com
          </a>
          <span> is licensed by </span>
          <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank">
            CC 3.0 BY
          </a>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
