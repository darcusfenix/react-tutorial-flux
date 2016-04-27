import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, age, gender } = this.props;

    return (
      <li>
        <span class="text-danger">{name}</span>
        <span class="text-success">{age}</span>
        <span class="text-info">{gender}</span> 
      </li>
    );
  }
}
