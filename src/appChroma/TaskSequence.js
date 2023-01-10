import React, { Component } from "react";
import PropTypes from 'prop-types';
import Task, { TaskModel } from './Task.js';
import Button from "unit/Button.js";
import "./TaskSequence.css"


export class TaskSequenceModel {

  // the generator function containing stream of tasks to display
  generator;
  constructor(generator) {
    this.generator = generator;
  }

  nextTask = () => {
    var genRes = this.generator.next();
    var res = new TaskModel(genRes);
    return res;
  }
}

export default class TaskSequence extends Component {

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
      <div className="TaskSequence">
        <Task model={this.state.taskModel} />
        <Button onClick={this.next} disabled={!this.state.next}>Next</Button>
      </div>
    );
  }
}

TaskSequence.propTypes = {
  model: PropTypes.instanceOf(TaskSequenceModel).isRequired
};
