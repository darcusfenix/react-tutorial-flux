import React from "react";

import AboutSocial from "./AboutSocial";
import PersonAbout from "./PersonAbout";
import PersonInfo from "./PersonInfo";
import PersonImg from "./PersonImg";

export default class AboutSection extends React.Component {
  render() {
    return (
      <section id="about" class="scroll-section root-sec padd-tb-60 grey lighten-5 about-wrap">
        <div class="container">
          <div class="row">
            <div class="clearfix about-inner">
              <div class="col-sm-12 col-md-4">
                <PersonAbout/>
              </div>
              <div class="col-sm-6 col-md-4">
                <PersonImg/>
              </div>
              <div class="col-sm-6 col-md-4">
                <PersonInfo/>
                <AboutSocial/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
