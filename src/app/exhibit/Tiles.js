import React, { Component } from "react";
import Paragraph from "unit/Paragraph.js";
import "./Tiles.css";

class Tiles extends Component {
  render() {
    var td =
    <td>
      <Tile/>
    </td>;

    var tr = 
    <tr>
      {td}{td}{td}{td}{td}{td}{td}{td}
      {td}{td}{td}{td}{td}{td}{td}{td}
    </tr>;

    return(
      <table align="center">
        <tbody>
          {tr}{tr}{tr}{tr}{tr}{tr}{tr}{tr}
          {tr}{tr}{tr}{tr}{tr}{tr}{tr}{tr}
        </tbody>
      </table>
    );
  }
}

class Tile extends Component {
  render() {
    return(
      <div className="Tiles--Tile"></div>
    );
  }
}

export default Tiles;
