import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Paragraph.css"

class Paragraph extends Component {
  render() {
    var classes = ["Paragraph"];
    if (this.props.italic) classes.push("Paragraph--italic");
    if (this.props.className) classes.push(this.props.className);
    return (
      <p className={classes.join(" ")}>
        {this.props.children}
      </p>
    );
  }
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  italic: PropTypes.bool
};

export default Paragraph;
