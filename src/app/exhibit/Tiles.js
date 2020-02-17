import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';
import Paragraph from "unit/Paragraph.js";
import "./Tiles.css";

class Tiles extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
      pattern : Patterns.getPattern()
    };
    this.maxInterval = 48;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      125
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var interval = this.state.interval + 1;
    var pattern = this.state.pattern;
    if (interval == this.maxInterval) {
      interval = 0;
      pattern = Patterns.getPattern();
    }
    this.setState({interval: interval, pattern: pattern});
  }

  render() {
    var table = [];
    for (var y = 0; y < 16; y++) {
      var row = [];
      for (var x = 0; x < 16; x++) {
        var cell =
          <td key={x + "-" + y}>
            <Tile x={x}
              y={y}
              interval={this.state.interval}
              maxInterval={this.maxInterval}
              pattern={this.state.pattern}/>
          </td>;
        row.push(cell);
      }
      table.push(
        <tr key={y}>
          {row}
        </tr>
      );
    }

    return(
      <table align="center">
        <tbody>
          {table}
        </tbody>
      </table>
    );
  }
}

class Patterns {

  static isHalfway(interval, maxInterval) {
    return interval < (maxInterval / 2);
  }
  
  static getStep(interval, maxInterval, maxStep) {
    return Math.floor(
      (interval % maxInterval) / (maxInterval / maxStep)
    );
  }

  static getPatterns() {
    var math = this;
    return [
      {
        checkShow(x, y, interval, maxInterval) {
          var isHalfway = math.isHalfway(interval, maxInterval);
          var step = math.getStep(interval, maxInterval / 2, 24);
          var transition = Math.abs(x - 7.5) + Math.abs(y - 7.5) <= step;
          return transition == isHalfway;
        }
      },
      {
        checkShow(x, y, interval, maxInterval) {
          var isHalfway = math.isHalfway(interval, maxInterval);
          var step = math.getStep(interval, maxInterval / 2, 48);
          var transition = (x + y) <= step;
          return transition == isHalfway;
        }
      },
      {
        checkShow(x, y, interval, maxInterval) {
          var isHalfway = math.isHalfway(interval, maxInterval);
          var step = math.getStep(interval, maxInterval / 2, 24);
          var transition = x <= step;
          return transition == isHalfway;
        }
      }
    ];
  }
  
  // returns a random int between min (inclusive) and max (exclusive)
  static getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // returns a random pattern
  static getPattern() {
    var patterns = this.getPatterns();
    return patterns[this.getRandom(0, patterns.length)];
  }
}

class Tile extends Component {
  static checkShow(x, y, interval, maxInterval, pattern) {
    return pattern.checkShow(x, y, interval, maxInterval);
  }

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  render() {
    var show = Tile.checkShow(
      this.props.x,
      this.props.y,
      this.props.interval,
      this.props.maxInterval,
      this.props.pattern
    );

    var display = null;
    if (show) {
      display = <div className="Tiles--TileDisplay"></div>;
    }
    return(
      <div className="Tiles--Tile">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
            {display}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Tile.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  maxInterval: PropTypes.number.isRequired,
  pattern: PropTypes.object.isRequired,
};

export default Tiles;
