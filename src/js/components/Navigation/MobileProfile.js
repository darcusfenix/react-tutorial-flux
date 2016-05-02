import React from "react";

export default class MobileDemo extends React.Component {
  render() {
    return (
      <li class="mobile-profile">
          <div class="profile-inner">
              <div class="pp-container">
                  <img src="images/person.png" alt=""/>
              </div>
              <h3>John Doe</h3>
              <h5>Creative UI/UX Expert</h5>
          </div>
      </li>
    );
  }
}
