import React, { Component } from "react";
import ExpandButton from 'icon/expand-button.svg';
import './ExhibitCard.css';

class ExhibitCard extends Component {
  render() {
    return(
      <div className="ExhibitCard">
        <div className="ExhibitCard-title">
          {this.props.children}
        </div>
        <div className="ExhibitCard-icon">
          <ExpandButton width="24px" height="24px"/>
        </div>
      </div>
    );
  }
}

export default ExhibitCard;
