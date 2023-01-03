import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Task.css'

class Task extends Component {
  render() {
    var className = "Task";
    if (this.props.className) {
      className += " this.props.className" 
    }
    return(
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

Task.propTypes = {
  className: PropTypes.string,
  // The text to display
  children: PropTypes.string.isRequired,
};

export default Task;
