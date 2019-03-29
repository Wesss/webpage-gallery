import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Button.css"

// TODO test rendering without onclick Prop
class Button extends Component {
  render() {
    var className = "Button";
    if (this.props.inverted) {
      className += " Button--inverted";
    }

    var render;
    if (this.props.linkTo) {
      render =
        <Link to={this.props.linkTo} className={className} onClick={this.props.onClick}>
          {this.props.children}
        </Link>;
    } else {
      render =
        <button className={className} onClick={this.props.onClick}>
          {this.props.children}
        </button>;
    }
    return(render);
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  children: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

export default Button;
