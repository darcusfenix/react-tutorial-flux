import React from "react";

import Service from "../../components/Service";
import ShowService from "../../pages/services/Show"

export default class Services extends React.Component {

  constructor(){
    super();
    this.state = { service : { name : "un servicio", location : "méxico df"} };
  }

  render() {
    const {id} = this.props.params

    if (!isNaN(id)) {
      return(
        <ShowService></ShowService>
      );
    }

    return (
      <div>
        <h1>Services List</h1>
        <Service service={this.state.service}></Service>
        <Service service={this.state.service}></Service>
        <Service service={this.state.service}></Service>
        <Service service={this.state.service}></Service>
      </div>
    );
  }
}
