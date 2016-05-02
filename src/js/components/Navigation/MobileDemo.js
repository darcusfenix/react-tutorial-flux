import React from "react";
import { IndexLink, Link } from "react-router";

import MobileProfile from "./MobileProfile"

export default class MobileDemo extends React.Component {
  render() {
    return (
      <ul class="inline-menu side-nav" id="mobile-demo">
          <MobileProfile />
          <li>
            <Link to="about" data-section="#about" class="menu-smooth-scroll" >
              <i class="fa fa-user fa-fw"></i>About Me
            </Link>
          </li>
          <li>
            <Link to="resume" data-section="#resume" class="menu-smooth-scroll" >
              <i class="fa fa-file-text fa-fw"></i>Resume
            </Link>
          </li>
          <li>
            <Link to="portafolio" data-section="#portafolio" class="menu-smooth-scroll" >
              <i class="fa fa-briefcase fa-fw"></i>Portafolio
            </Link>
          </li>
          <li>
            <Link to="team" data-section="#team" class="menu-smooth-scroll" >
              <i class="fa fa-users fa-fw"></i>Team
            </Link>
          </li>
          <li>
            <Link to="testimonial" data-section="#testimonial" class="menu-smooth-scroll" >
              <i class="fa fa-comments fa-fw"></i>Testimonial
            </Link>
          </li>
          <li>
            <Link to="blog" data-section="#blog" class="menu-smooth-scroll" >
              <i class="fa fa-pencil fa-fw"></i>Blog
            </Link>
          </li>
          <li>
            <Link to="contact" data-section="#contact" class="menu-smooth-scroll" >
              <i class="fa fa-paper-plane fa-fw"></i>Contact
            </Link>
          </li>
      </ul>
    );
  }
}
