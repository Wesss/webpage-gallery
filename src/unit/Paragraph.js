import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Paragraph.css"

class Paragraph extends Component {
  render() {
    return (
      <p className={this.props.className ? "Paragraph " + this.props.className : "Paragraph"}>
        {this.props.children}
      </p>
    );
  }
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
