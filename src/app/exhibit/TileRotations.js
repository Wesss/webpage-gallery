import React, { Component } from "react";
import "./TileRotations.css";

class TileRotations extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");
    this.tiles = [new Tile(100, 100), new Tile(200, 200)];

    this.interval = setInterval(
      () => this.tick(),
      1000 / 60
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    var canvas = this.canvas;
    var ctx = this.ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.tiles.forEach(tile => tile.draw(this.ctx));
  }

  render() {
    return(
      // TODO center this in exhibit container
      <canvas ref={this.canvasRef} width={500} height={500}>
      </canvas>
    );
  }
}

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default TileRotations;
