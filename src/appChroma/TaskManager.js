import React, { Component } from "react";
import PropTypes from 'prop-types';
import Task from './Task.js';
import Button from "unit/Button.js";
import "./TaskManager.css"

class TaskManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prev: true,
      next: true
    };
  }

  prev = () => {
    this.setState((state, props) => {
      state.prev = false;
      state.next = true;
      return state;
    });
  }

  next = () => {
    this.setState((state, props) => {
      state.prev = true;
      state.next = false;
      return state;
    });
  }

  render() {
    return (
      <div className="TaskManager">
        <Task>{this.props.startTask}</Task>
        <div className="TaskManager--Buttons">
          <Button onClick={this.prev} disabled={!this.state.prev}>Prev</Button>
          <Button onClick={this.next} disabled={!this.state.next}>Next</Button>
        </div>
      </div>
    );
  }
}

TaskManager.propTypes = {
  startTask: PropTypes.string.isRequired
};

export default TaskManager;
