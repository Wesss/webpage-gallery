import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Button.css"

// TODO test rendering without onclick Prop
class Button extends Component {
  render() {
    var className = "Button";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    if (this.props.inverted) {
      className += " Button--inverted";
    }

    var render;
    if (this.props.linkTo) {
      render =
        // TODO WESD honor diabled prop for link versions of buttons
        <Link to={this.props.linkTo} className={className} onClick={this.props.onClick}>
          {this.props.children}
        </Link>;
    } else {
      render =
        // TODO WESD style disabled buttons to not look clickable
        <button className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
          {this.props.children}
        </button>;
    }
    return(render);
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  children: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
