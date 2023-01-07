import React, { Component } from "react";
import PropTypes from 'prop-types';
import Task, { TaskModel } from './Task.js';
import Button from "unit/Button.js";
import "./TaskManager.css"


export class TaskManagerModel {
  static GetModel(startTask) {
    var res = new TaskManagerModel();

    // TODO WESD move these to some other home, to be organized better when we scale out?
    function* testgen() {
      yield 'do one thing';
      yield 'do another thing';
      return 'wake up!';
    };

    switch(startTask) {
      // TODO WESD make this an enum lookup?
      case "testStart":
        res.generator = testgen();
        break;
      default:
        throw "Unhandled startTask: " + startTask
    }

    return res;
  }

  // the generator function containing stream of tasks to display
  generator;
  constructor() {}

  nextTask = () => {
    var res = new TaskModel();
    var genRes = this.generator.next();
    // TODO WESD move task generation to task model
    res.task = genRes.value;
    res.next = !genRes.done;
    return res;
  }
}

export default class TaskManager extends Component {

  constructor(props) {
    super(props);
    var model = props.model;

    var nextTask = model.nextTask();
    this.state = {
      taskModel: nextTask,
      next: nextTask.next
    };
  }

  next = () => {
    this.setState((state, props) => {
      var nextTask = props.model.nextTask();
      state.taskModel = nextTask;
      state.next = nextTask.next;
      return state;
    });
  }

  render() {
    return (
      <div className="TaskManager">
        <Task model={this.state.taskModel} />
        <Button onClick={this.next} disabled={!this.state.next}>Next</Button>
      </div>
    );
  }
}

TaskManager.propTypes = {
  model: PropTypes.instanceOf(TaskManagerModel).isRequired
};
