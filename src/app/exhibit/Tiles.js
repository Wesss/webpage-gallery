import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';
import Paragraph from "unit/Paragraph.js";
import "./Tiles.css";

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var counter = this.state.counter + 1;
    if (counter == 16) {
      counter = 0;
    }
    this.setState({counter: counter});
  }

  render() {
    var table = [];
    for (var y = 0; y < 16; y++) {
      var row = [];
      for (var x = 0; x < 16; x++) {
        var cell =
          <td key={x + "-" + y}>
            <Tile x={x} y={y} counter={this.state.counter}/>
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

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  // returns true when the cell at the given coordinates is to
  // start transitioning
  checkTransition(x, y, interval) {
    return interval > 1 || (x + y) % 2 == 0;
  }

  render() {
    var isFadingIn = this.props.counter < 8;
    var interval = this.props.counter % 8;
    var x = this.props.x;
    var y = this.props.y;

    var show;
    if (isFadingIn) {
      show = this.checkTransition(x, y, interval)
    } else {
      show = !this.checkTransition(x, y, interval)
    }

    var display = null;
    if (show) {
      display = <div className="Tiles--TileDisplay"></div>;
    }
    return(
      <div className="Tiles--Tile">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
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
  isShowing: PropTypes.bool.isRequired,
};

export default Tiles;
