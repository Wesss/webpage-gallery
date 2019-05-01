import React, { Component } from "react";
import Headline from "unit/Headline.js";
import Paragraph from "unit/Paragraph.js";
import Link from "unit/Link.js";
import "./MeetTheTeam.css";

class MeetTheTeam extends Component {
  render() {
    return(
      <div>
        <Headline level={3}>
          Meet the Team
        </Headline>
        <Headline level={5} className="u-marginSmall">
          An Example of Static Content Rendering
        </Headline>
        <Profile name="Wesley Cox" title="Software Developer" avatar="https://i.imgur.com/KbpN45f.jpg">
          Wesley is a full stack developer with a wide variety of programming languages,
          frameworks, and projects under his belt. Here, he'd like to just show you that he
          can render some images and text and make it look decent. He is by no means a designer though,
          so please forgive the lack of artistic quality.
        </Profile>
        <Profile name="Code Duck" title="Principal Software Engineer Consultant" avatar="https://imgur.com/ShFnMez.jpg">
          Code Duck is the real brains behind this whole operation. Whenever the team gets stuck, we can
          always rely on Code Duck to lend us an open ear and give us insights into
          our problems. In his spare time, he enjoys wearing seasonal scarfs and enjoying
          his hot tub. If you'd like to employ your own rubber duck, you can find out more
          <span> at </span>
          <Link href="https://rubberduckdebugging.com" newTab={true}>https://rubberduckdebugging.com</Link>
        </Profile>
        <Profile name="Tiger (left) &amp; Nala (right)" title="Office Environment Simulators" avatar="https://i.imgur.com/SisWrr0.jpg">
          These two beauties keep the development experience authentic by providing experiences that
          are found in a typical office setting. These include scuttling around the room from time to time,
          insisting that we eat lunch now, and coming up to casually talk to you right as you're about to
          hit a breakthrough in your work.
        </Profile>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return(
      <div className="u-marginSmall">
        <Headline level={4}>
          {this.props.name}
        </Headline>
        <Headline level={5}>
          {this.props.title}
        </Headline>
        <img className="MeetTheTeam-profileImage" src={this.props.avatar}/>
        <Paragraph>
          {this.props.children}
        </Paragraph>
      </div>
    );
  }
}

export default MeetTheTeam;
