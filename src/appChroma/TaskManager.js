import React, { Component } from "react";
import PropTypes from 'prop-types';
import Task from './Task.js';
import Button from "unit/Button.js";

class TaskManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prev: true,
      next: true
    };
  }

  prev = () => {
    console.log("wesd prev");
    this.setState((state, props) => {
      console.log("wesd prev");
      state.prev = false;
      state.next = true;
      return state;
    });
  }

  next = () => {
    console.log("wesd next");
    this.setState((state, props) => {
      console.log("wesd next");
      state.prev = true;
      state.next = false;
      return state;
    });
  }

  render() {
    return (
      <div>
        <Task>{this.props.startTask}</Task>
        <Button onClick={this.prev} disabled={!this.state.prev}>Prev</Button>
        <Button onClick={this.next} disabled={!this.state.next}>Next</Button>
      </div>
    );
  }
}

TaskManager.propTypes = {
  // TODO Wesd honor this param
  startTask: PropTypes.string.isRequired
};

export default TaskManager;
