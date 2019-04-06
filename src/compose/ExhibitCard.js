import React, { Component } from "react";
// import ExpandButton from 'icon/expand-button.svg';
import './ExhibitCard.css';
// <ExpandButton/>
// <img src="expand-button.svg" alt="expand button"/>

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
