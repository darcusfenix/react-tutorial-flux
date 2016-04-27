import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import $ from "jquery";

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.users = [
      {id : 1,name : "JUAN", age : 24, gender : "M"},
      {id : 2, name : "GUADALUPE", age : 26, gender : "F"},
      {id : 3, name : "JESSICA", age : 22, gender : "F"}
    ];
  }
  createUser(user){
    this.users.push({
      id : user.id,
      name : user.name,
      age: user.age,
      gender: user.gender
    });
    this.emit("change");
  }

  findById(idUser){
    var result = $.grep(this.users, function(e){ return e.id == idUser; });
    return result[0] ? result[0] : null;
  }

  getAll(){
    return this.users;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_USER": {
        this.createUser(action.user);
        break;
      }
      case "FIND_USER_BY_ID": {
        console.log("entró aquí");
        console.log("flux: " + this.findById(action.id));
        this.findById(action.id);
        break;
      }
      case "RECEIVE_USERS": {
        this.users = action.users;
        this.emit("change");
        break;
      }
    }
  }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
window.userStore = userStore;
window.dispatcher = dispatcher;
export default userStore;
