var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message', () => {
    var res = generateMessage('andrew', 'hi');

    expect(res.from).toBe('andrew');
    expect(res.text).toBe('hi');
    expect(res.createdAt).toBeA('number');
  })
})