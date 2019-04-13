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

  getClasses = (className, activeCasedClassName, inverted) => {
    var classes = "Link";
    if (className) {
      classes += " " + className;
    }
    if (activeCasedClassName) {
      classes += " " + activeCasedClassName;
    }
    if (inverted) {
      classes += " Link--inverted";
    }
    return classes;
  }

  render() {
    var { className, activeClassName, inactiveClassName, href, children, newTab, title, inverted } = this.props;
    var titleProp = {
      title: title
    };
    var render;
    if (this.isRelativeUrl(href)) {
      render = <Route
        path={href}
        exact={true}
        children={({ match }) => {
          if (match) {
            render =
              <span className={this.getClasses(className, activeClassName, inverted)} {...titleProp}>
                {children}
              </span>;
          } else {
            render =
              <RouteLink className={this.getClasses(className, inactiveClassName, inverted)} to={href} {...titleProp}>
                {children}
              </RouteLink>;
          }
        }}
      />;
    } else {
      var targetProp = {};
      if (this.props.newTab) {
        targetProp.target = "_blank";
      };
      render =
        <a className={this.getClasses(className, inactiveClassName, inverted)} href={href} {...targetProp} {...titleProp}>
          {children}
        </a>;
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
  newTab: PropTypes.bool,
  title: PropTypes.string
};

export default Link;
