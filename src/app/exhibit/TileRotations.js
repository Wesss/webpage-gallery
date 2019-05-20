import React, { Component } from "react";
import "./TileRotations.css";

class TileRotations extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 500);
    ctx.stroke();
  }

  render() {
    return(
      // TODO center this in exhibit container
      <canvas ref="canvas" width={500} height={500}>
      </canvas>
    );
  }
}

export default TileRotations;
