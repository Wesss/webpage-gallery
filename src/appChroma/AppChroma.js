import React, { Component } from "react";
import TaskManager, {TaskManagerModel} from "./TaskManager.js";

class App extends Component {
  render() {
    var model = TaskManagerModel.GetModel("testStart");
    return(
      <TaskManager model={model}/>
    );
  }
}

export default App;
