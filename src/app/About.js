import React, { Component } from "react";
import Page from "compose/Page.js";
import Headline from "unit/Headline.js";
import Paragraph from "unit/Paragraph.js";
import Link from "unit/Link.js";
import './About.css';

class About extends Component {

  render() {
    return(
      <Page>
        <Headline level={3}>
          About The Team
        </Headline>
        <hr/>
        <Profile name="Wesley Cox" title="Software Developer" avatar="https://i.imgur.com/KbpN45f.jpg">
          Hi, my name is Wesley Cox, and I am a software developer that mainly focuses on web applications.
          Whilst I spend most of my free time playing games or spending time with my partner, once in a while I'll
          spin up a small project and put it on this site.
        </Profile>
        <hr/>
        <Profile name="Code Duck" title="Principal Software Engineer Consultant" avatar="https://imgur.com/ShFnMez.jpg">
          Code Duck is the real brains behind this whole operation. Whenever the team gets stuck, we can
          always rely on Code Duck to lend us an open ear and give us insights into
          our problems. In his spare time, he enjoys wearing seasonal scarfs and enjoying
          his hot tub. If you'd like to employ your own rubber duck, you can find out more
          <span> at </span>
          <Link href="https://rubberduckdebugging.com" newTab={true}>https://rubberduckdebugging.com</Link>
        </Profile>
        <hr/>
        <Profile name="Tiger (left) &amp; Nala (right)" title="Office Environment Simulators" avatar="https://i.imgur.com/SisWrr0.jpg">
          These two beauties keep the development experience authentic by simulating common distraction around the workplace.
          These include scuttling around the room from time to time,
          insisting that we eat lunch now, and distracting you right as you enter your groove.
        </Profile>
      </Page>
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
        <Paragraph italic={true} className="u-marginSmall">
          {this.props.title}
        </Paragraph>
        <img className="About-profileImage u-marginSmall" src={this.props.avatar}/>
        <Paragraph className="u-marginSmall">
          {this.props.children}
        </Paragraph>
      </div>
    );
  }
}

export default About;
