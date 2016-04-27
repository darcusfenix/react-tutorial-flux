import React from "react";

import User from "../components/User"
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore"

export default class Archives extends React.Component {

  constructor(){
    super();
    this.getUsers  = this.getUsers.bind(this);
    this.state = {
      users : UserStore.getAll()
    }
  }

  componentWillMount() {
    UserStore.on("change", this.getUsers);
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.getUsers);
  }

  getUsers() {
    this.setState({
      users: UserStore.getAll(),
    });
  }

  render() {
    const { users } = this.state;
    console.log(users);
    const UserComponents = users.map((user) => {
        return <User key={user.id} {...user}/>;
    });

    return (
      <div>
        <h1>User</h1>
        <ul>
          {UserComponents}
        </ul>
      </div>
    );
  }
}
