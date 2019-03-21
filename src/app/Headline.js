import React, { Component } from "react";
import PropTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var Tag = 'h' + this.props.level;
        var className = "Headline Headline--" + this.props.level;
        if (this.props.inverted) {
            className += " Headline--inverted";
        }
        return(
            <Tag class={className}>
                {this.props.headline}
            </Tag>
        );
    }
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    inverted: PropTypes.bool,
};

export default Headline;
