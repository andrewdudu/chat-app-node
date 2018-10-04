const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }]
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    }

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  })

  it('should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  })

  it('should remove a user', () => {
    var userRemove = users.removeUser('1');

    expect(userRemove).toEqual([{
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }])
  })

  it('should not remove a user', () => {
    var userRemove = users.removeUser('4');

    expect(userRemove).toEqual([{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }])
  })

  it('should get a user', () => {
    var user = users.getUser('1');

    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node course'
    })
  })

  it('should not get a user', () => {
    var user = users.getUser('0');

    expect(user).toEqual(undefined);
  })
})
