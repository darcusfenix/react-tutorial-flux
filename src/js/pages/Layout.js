import React from "react";
import { Link } from "react-router";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HomeSection from "../components/HomeSection/HomeSection"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
