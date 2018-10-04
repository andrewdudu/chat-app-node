class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var removedUser = this.users.filter(user => user.id !== id);
    this.users = removedUser;
    return this.users;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    var user = this.users.filter(user => user.room === room);
    var namesArray = user.map(user => user.name);

    return namesArray;
  }
}

module.exports = {Users};
