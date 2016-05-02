import React from "react";

import SkillRight from "./SkillRight";

export default class ResumeSection extends React.Component {
  render() {
    return (
      <section id="resume" class="scroll-section ">
        <section id="skill" class="root-sec white skill-wrap">
            <div class="sec-overlay">
                <div class="container">
                    <div class="row">
                        <div class="clearfix skill-inner">
                            <div class="col-sm-12 col-md-3">
                                <div class="skill-left">
                                    <h2 class="title">Skills</h2>
                                    <p class="regular-text">Man behind the gun, any sophisticated weapons. Human remains that taking the role. We are experienced in utilizing all resources.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-md-offset-1">
                                <SkillRight />
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrapp skl-ctrl">
                        <a class="btn-floating waves-effect waves-light btn-large brand-bg white-text go go-left"><i class="mdi-navigation-chevron-left "></i></a>
                        <a class="btn-floating waves-effect waves-light btn-large brand-bg white-text go go-right"><i class="mdi-navigation-chevron-right "></i></a>
                    </div>
                </div>
            </div>
        </section>
    </section>
    );
  }
}
