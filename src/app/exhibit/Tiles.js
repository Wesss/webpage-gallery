import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';
import Paragraph from "unit/Paragraph.js";
import "./Tiles.css";

class Tiles extends Component {
  constructor(props) {
    super(props);
    var table = [];
    for (var y = 0; y < 16; y++) {
      var row = [];
      for (var x = 0; x < 16; x++) {
        row.push({
          show: false
        });
      }
      table.push(row)
    }
    this.state = {table: table};
  }

  componentDidMount() {
    this.cycleCounter = 0;
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // returns true when the cell at the given coordinates is to
  // start transitioning
  checkTransition(x, y, interval) {
    return interval > 1 || (x + y) % 2 == 0;
  }

  tick() {
    var isShowing = this.cycleCounter < 8;
    var interval = this.cycleCounter % 8;

    var table = this.state.table;
    for (var y = 0; y < 16; y++) {
      for (var x = 0; x < 16; x++) {
        var curShow = table[y][x].show;
        var newShow;
        if (isShowing) {
          newShow = curShow || this.checkTransition(x, y, interval)
        } else {
          newShow = curShow && !this.checkTransition(x, y, interval)
        }
        table[y][x].show = newShow;
      }
    }
    this.setState({table: table});

    this.cycleCounter++;
    if (this.cycleCounter == 16) {
      this.cycleCounter = 0;
    }
  }

  render() {
    var table = this.state.table;
    var tableRender = [];
    for (var y = 0; y < table.length; y++) {
      var row = table[y];
      var rowRender = [];
      for (var x = 0; x < row.length; x++) {
        var cell = row[x];
        var cellRender = 
          <td key={x + "-" + y}>
            <Tile show={cell.show}/>
          </td>;
        rowRender.push(cellRender);
      }
      tableRender.push(
        <tr key={y}>
          {rowRender}
        </tr>
      );
    }

    return(
      <table align="center">
        <tbody>
          {tableRender}
        </tbody>
      </table>
    );
  }
}

class Tile extends Component {
  render() {
    var display = null;
    if (this.props.show) {
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
  show: PropTypes.bool.isRequired
};

export default Tiles;
