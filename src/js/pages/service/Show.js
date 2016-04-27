import React from "react";

import Service from "../../components/Service";
import User from "../../components/User"
import UserStore from "../../stores/UserStore";
import * as UserActions from "../../actions/UserActions"

export default class Show extends React.Component {

  constructor(){
    super();
    this.state = {

      service : { name : "un servicio", location : "méxico df"}
    }
  }

  render() {
    const {id} = this.props.params;
    console.log("id pass: " + id);
    let user = UserStore.findById(id);
    return (
      <div>
        <h1>Info Individual service</h1>
        <Service service={this.state.service}></Service>
        <h3>I'm new h3</h3>
        <p>hellow world</p>
        <h1>
          { user === null || user === undefined ? 'user not found' : <User key={user.id} {...user}/> }
        </h1>
      </div>
    );
  }
}
