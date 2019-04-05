import React, { Component } from "react";
import './ExhibitCard.css';

class ExhibitCard extends Component {
  render() {
    return(
      <div className="ExhibitCard">
        <div className="ExhibitCard-title">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ExhibitCard;
