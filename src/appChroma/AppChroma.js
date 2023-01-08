import React, { Component } from "react";
import TaskSequence, {TaskSequenceModel} from "./TaskSequence.js";
import TaskMenu from './TaskMenu.js';
import TaskFactory from './tasks/TaskFactory.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      taskSequenceModel: null
    };
  }

  selectTaskSequence = (taskSequenceName) => {
    var tasks = TaskFactory.getModel(taskSequenceName);
    this.setState((state, props) => {
      state.taskSequenceModel = tasks;
      return state;
    });
  }

  render() {
    var tasks = this.state.taskSequenceModel;
    var res = null;
    if (tasks == null) {
      res = <TaskMenu onSelectTask={this.selectTaskSequence} />;
    } else {
      res = <TaskSequence model={tasks}/>;
    }
    
    return (res);
  }
}

export default App;
