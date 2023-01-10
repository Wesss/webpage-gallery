import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Task.css'

export class TaskModel {
  // the task to display
  task = "";
  // whether or not another task exists
  next = true;
  constructor(genInput) {
    var display = genInput.value;
    if (typeof input === 'string') {
      display = <span>{display}</span>;
    }
    this.task = display;
    this.next = !genInput.done;
  }
}

export default class Task extends Component {
  render() {
    var className = "Task";
    if (this.props.className) {
      className += " " + this.props.className 
    }
    var model = this.props.model;
    return(
      <div className={className}>
        {model.task}
      </div>
    );
  }
}

Task.propTypes = {
  className: PropTypes.string,
  model: PropTypes.instanceOf(TaskModel).isRequired
};

