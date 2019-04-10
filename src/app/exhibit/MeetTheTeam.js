import React, { Component } from "react";
import Headline from "unit/Headline.js";

class MeetTheTeam extends Component {
  render() {
    return(
      <div>
        <div className="u-marginSmall">
          <Headline level={3}>
            Wesley Cox
          </Headline>
          <Headline level={4}>
            Software Developer
          </Headline>
        </div>
        <div className="u-marginSmall">
          <Headline level={3}>
            Code Duck
          </Headline>
          <Headline level={4}>
            Principal Software Engineer Consultant
          </Headline>
        </div>
        <div className="u-marginSmall">
          <Headline level={3}>
            Platypus
          </Headline>
          <Headline level={4}>
            Junior Web Developer
          </Headline>
        </div>
      </div>
    );
  }
}

export default MeetTheTeam;
