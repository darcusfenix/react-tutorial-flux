import dispatcher from "../dispatcher";

// user object {id : 1,name : "JUAN", age : 24, gender : "M"}
export function createUser(user) {
  dispatcher.dispatch({
    type: "CREATE_USER",
    user: user
  });
}

export function findById(id) {
  dispatcher.dispatch({
    type: "FIND_USER_BY_ID",
    id,
  });
}

export function deleteUser(id) {
  dispatcher.dispatch({
    type: "DELETE_USER",
    id,
  });
}

export function reloadUsers() {
  dispatcher.dispatch({type: "FETCH_USERS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_USERS", users: [
      {
        id: 8484848484,
        name: "soy el nuevo usuario",
        age: 20,
        geneder
      }
    ]});
  }, 1000);
}
