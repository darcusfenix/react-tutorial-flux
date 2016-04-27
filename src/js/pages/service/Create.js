import React from "react";

export default class Create extends React.Component {
  render() {
    console.log("create me!")
    return (
      <div>
        <h1>Create new Service</h1>
        <input type="text" placeholder="create me!"/>
      </div>
    );
  }
}
