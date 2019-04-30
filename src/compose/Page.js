import React, { Component } from "react";
import PropTypes from 'prop-types';
import NavBar from "compose/NavBar.js";
import Footer from "compose/Footer.js";
import './Page.css';

class Page extends Component {
  render() {
    return(
      <div className="Page">
        <div className="Page-navBar">
          <NavBar/>
        </div>
        <div className="Page-body">
          {this.props.children}
        </div>
        <div className="Page-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
