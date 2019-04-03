import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route, Link as RouteLink } from "react-router-dom";
import "./Link.css";

// if current route matches this link's to value, it replaces className with
// activeClassName and disables the link
class Link extends Component {
  isRelativeUrl = (href) => {
    return href.charAt(0) == "/";
  }

  getClasses = (className, activeCasedClassName) => {
    var classes = "Link";
    if (className) {
      classes += " " + className;
    }
    if (activeCasedClassName) {
      classes += " " + activeCasedClassName;
    }
    return classes;
  }

  render() {
    var { className, activeClassName, inactiveClassName, href, children } = this.props;
    var render;
    if (this.isRelativeUrl(href)) {
      render = <Route
        path={href}
        exact={true}
        children={({ match }) => {
          if (match) {
            return <span className={this.getClasses(className, activeClassName)}>{children}</span>;
          } else {
            return <RouteLink className={this.getClasses(className, inactiveClassName)} to={href}>{children}</RouteLink>
          }
        }}
      />;
    } else {
      render = <a className={this.getClasses(className, inactiveClassName)} href={href}>{children}</a>;
    }




    return(render);
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string,
};

export default Link;
