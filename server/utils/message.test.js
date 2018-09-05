var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message', () => {
    var res = generateMessage('andrew', 'hi');

    expect(res.from).toBe('andrew');
    expect(res.text).toBe('hi');
    expect(res.createdAt).toBeA('number');
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object.', () => {
    var res = generateLocationMessage('Admin', 'test', 'test1');

    expect(res.from).toBe('Admin');
    expect(res.url).toBe('https://google.com/maps?q=test,test1');
    expect(res.createdAt).toBeA('number');
  })
})