import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Headline.css"

class Headline extends Component {
  render() {
    var Tag = 'h' + this.props.level;
    var className = "Headline Headline--" + this.props.level;
    if (this.props.inverted) {
      className += " Headline--inverted";
    }
    return(
      <Tag className={className}>
        {this.props.children}
      </Tag>
    );
  }
}

Headline.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  inverted: PropTypes.bool,
};

export default Headline;
