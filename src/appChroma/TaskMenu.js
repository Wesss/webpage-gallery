import React, { Component } from "react";
import PropTypes from 'prop-types';
import TaskFactory from './tasks/TaskFactory.js';
import Button from "unit/Button.js";
import Headline from 'unit/Headline.js';
import "./TaskMenu.css"

export default class TaskMenu extends Component {

  onButtonClick = (name) => {
    return () => {
      this.props.onSelectTask(name);
    }
  }

  render() {
    var taskCategories = TaskFactory.getTasks();
    var categories = [];
    for (var categoryName of Object.keys(taskCategories)) {
      var taskNames = taskCategories[categoryName];
      var buttons = [];
      for (var name of taskNames) {
        buttons.push(
          <Button key={name} onClick={this.onButtonClick(name)}>{TaskMenu.camelCaseToTitle(name)}</Button>
        );
      }
      categories.push(
        <div key={categoryName} className="TaskMenu--Category">
          <Headline level={2}>{TaskMenu.camelCaseToTitle(categoryName)}</Headline>
          <div className="TaskMenu--TaskButtons">
            {buttons}
          </div>
        </div>
      );
    }

    return(
      <div className="TaskMenu">
        {categories}
      </div>
    );
  }

  static camelCaseToTitle(str) {
    var res = str.replace(/([A-Z])/g, " $1");
    res = res.charAt(0).toUpperCase() + res.slice(1);
    return res;
  }
}

TaskMenu.propTypes = {
  onSelectTask: PropTypes.func.isRequired
};
