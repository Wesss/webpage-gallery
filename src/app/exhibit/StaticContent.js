import React, { Component } from "react";
import Headline from "unit/Headline.js";
import Paragraph from "unit/Paragraph.js";
import Link from "unit/Link.js";

class StaticContent extends Component {
  render() {
    return(
      <div>
        <Paragraph className="u-marginMedium">
          This is an example of rendering some content in a common webpage format, utilizing
          standard html/css techniques and image hosting.
        </Paragraph>
        <Headline level={3}>
          Meet the Team
        </Headline>
        <Headline level={5} className="u-marginSmall">
          An Example of Static Content Rendering
        </Headline>
        <Profile name="Wesley Cox" title="Software Developer">
          Wesley is a full stack developer with a wide variety of programming languages,
          frameworks, and projects under his belt. Here, he'd like to just show you that he
          can render some images and text and make it look decent. He's not a designer though,
          so please forgive the lack of artistic quality.
        </Profile>
        <Profile name="Code Duck" title="Principal Software Engineer Consultant">
          The real brains behind this whole operation. Whenever the team gets stuck, we can
          always rely on Code Duck to lend us an open ear and give us insights into
          our problems. In his spare time, he enjoys picking out seasonal scarfs and enjoying
          his hot tub. If you'd like to employ your own rubber duck, you can find out more
          <span> at </span>
          <Link href="https://rubberduckdebugging.com">https://rubberduckdebugging.com</Link>
        </Profile>
        <Profile name="Platypus" title="Junior Developer">
          Platypus is the newcomer of the team, and despite his old age, he's ready to tackle
          the modern world of web development. In his spare time, he enjoys keeping warm and
          blankly staring out into the scenery.
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
        <Paragraph>
          {this.props.children}
        </Paragraph>
      </div>
    );
  }
}

export default StaticContent;
