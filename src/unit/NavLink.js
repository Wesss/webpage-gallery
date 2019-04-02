import React, { Component } from "react";
import Button from "unit/Button";
import { Route, Link } from "react-router-dom";
import "./NavLink.css";

// if current route matches this link's to value, it replaces className with
// activeClassName and disables the link
class NavLink extends Component {
  render() {
    var { className, activeClassName, to, exact, ...rest } = this.props;
    return(
      <Route
        path={to}
        exact={exact}
        children={({ match }) => {
          if (match) {
            // TODO fix 'to' prop missing warning
            return <Link className={"NavLink " + activeClassName} {...rest}/>;
          } else {
            return <Link className={"NavLink " + className} to={to} {...rest}/>
          }
        }}
      />
    );
  }
}

export default NavLink;
