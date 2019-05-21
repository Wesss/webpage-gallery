import React, { Component } from "react";
import "./TileRotations.css";

class TileRotations extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {frame: 0};
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");

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

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, this.state.frame);
    ctx.stroke();

    this.setState((state) => {
      state.frame = state.frame + 1;
      return state;
    });
  }

  render() {
    return(
      // TODO center this in exhibit container
      <canvas ref={this.canvasRef} width={500} height={500}>
      </canvas>
    );
  }
}

export default TileRotations;
