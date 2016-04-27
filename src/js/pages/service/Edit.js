import React from "react";

export default class Edit extends React.Component {
  render() {
    console.log("edit me!")
    return (
      <div>
        <h1>Individual Service to edit</h1>
        <input type="text" placeholder="edit me!"/>
      </div>
    );
  }
}
