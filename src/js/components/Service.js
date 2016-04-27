import React from "react";

export default class Service extends React.Component {
  render() {
    const {name, location} = this.props.service
    console.log(this.props);
    return (
      <h4>datos: {name} <b>{location}</b> </h4>
    );
  }
}
