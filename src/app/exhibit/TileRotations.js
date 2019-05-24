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
    this.lattice = new TileLattice();

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

    this.lattice.draw(ctx);
  }

  render() {
    return(
      // TODO center this in exhibit container
      <canvas ref={this.canvasRef} width={500} height={500}>
      </canvas>
    );
  }
}

class TileLattice {
  constructor() {
    this.tiles = [];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        this.tiles.push(new Tile((i * 100) + 50, (j * 100) + 50, 25));
      }
    }
  }

  draw(ctx) {
    this.tiles.forEach(tile => tile.draw(ctx));
  }
}

class Tile {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default TileRotations;
