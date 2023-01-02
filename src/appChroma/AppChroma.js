import React, { Component } from "react";
import TaskManager from "./TaskManager.js";

class App extends Component {
  render() {
    return(
      <TaskManager startTask="startStub"/>
    );
  }
}

export default App;
