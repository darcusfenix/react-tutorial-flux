import React from "react";

export default class AboutSocial extends React.Component {
  render() {
    return (
      <div class="about-social">
        <ul>
          <li>
            <a href="#" class="btn-floating waves-effect waves-light white"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="btn-floating waves-effect waves-light white"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#" class="btn-floating waves-effect waves-light white"><i class="fa fa-google-plus"></i></a>
           </li>
          <li>
            <a href="#" class="btn-floating waves-effect waves-light white"><i class="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#" class="btn-floating waves-effect waves-light white"><i class="fa fa-pinterest"></i></a>
          </li>
        </ul>
      </div>
    );
  }
}
