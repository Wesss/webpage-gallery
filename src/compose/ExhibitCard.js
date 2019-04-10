import React, { Component } from "react";
import ExpandButton from 'icon/expand-button.svg';
import Headline from "unit/Headline";
import './ExhibitCard.css';

class ExhibitCard extends Component {
  render() {
    return(
      <div className="ExhibitCard">
        <div className="ExhibitCard-title">
          <Headline level={4}>
            {this.props.children}
          </Headline>
        </div>
        <div className="ExhibitCard-icon">
          <ExpandButton width="24px" height="24px"/>
        </div>
      </div>
    );
  }
}

export default ExhibitCard;
