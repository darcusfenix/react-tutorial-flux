import React from "react";

export default class PersonInfo extends React.Component {
  render() {
    return (
      <div class="person-info">
        <h3 class="about-subtitle">Personal Information</h3>
        <h5><span>Name :</span> John Doe</h5>
        <h5><span>Age :</span> 25 Years</h5>
        <h5><span>Phone :</span> +0123456789</h5>
        <h5><span>Email :</span> email@domain.com</h5>
        <h5><span>Address :</span> Dhaka, Bangladesh</h5>
      </div>
    );
  }
}
