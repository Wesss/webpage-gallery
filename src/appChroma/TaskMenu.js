import React, { Component } from "react";
import PropTypes from 'prop-types';
import TaskFactory from './tasks/TaskFactory.js';
import Button from "unit/Button.js";
import "./TaskMenu.css"

export default class TaskMenu extends Component {

  onButtonClick = (name) => {
    return () => {
      this.props.onSelectTask(name);
    }
  }

  render() {
    var taskNames = TaskFactory.getTasks();
    var buttons = [];
    for (var name of taskNames) {
      buttons.push(
        <Button key={name} onClick={this.onButtonClick(name)}>{name}</Button>
      );
    }
    return(
      <div className="TaskMenu">
        <div>tasks:</div>
        {buttons}
      </div>
    );
  }
}

TaskMenu.propTypes = {
  onSelectTask: PropTypes.func.isRequired
};
