import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "unit/Button.js";

class Task extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

Task.propTypes = {
  // The text to display
  children: PropTypes.string.isRequired,
};

export default Task;
