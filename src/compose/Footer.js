import React, { Component } from "react";
import Link from "unit/Link";
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <span> Icons made by </span>
        <Link href="https://www.flaticon.com/authors/google"
          title="Google"
          newTab={true}>
          Google
        </Link>
        <span> from </span>
        <Link href="https://www.flaticon.com/"
          title="Flaticon"
          newTab={true}>
          www.flaticon.com
        </Link>
        <span> is licensed by </span>
        <Link href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          newTab={true}>
          CC 3.0 BY
        </Link>
      </div>
    );
  }
}

export default Footer;
