import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Button.css"

class Button extends Component {
  render() {
    var className = "Button";
    if (this.props.inverted) {
      className += " Button--inverted";
    }
    return(
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  inverted: PropTypes.bool,
};

export default Button;
