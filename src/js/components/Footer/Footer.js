import React from "react";

import SocialIcons from "./SocialIcons"

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" class="root-sec white root-sec footer-wrap">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="clearfix footer-inner">
                <SocialIcons />
                <div class="right copyright">
                  <p>MaterialX &copy; All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
