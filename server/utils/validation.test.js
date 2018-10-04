const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var nonString = isRealString(123);

    expect(nonString).toBe(false);
  })

  it('should reject spaces string values', () => {
    var spacesString = isRealString(' ');

    expect(spacesString).toBe(false);
  })

  it('should accept non-space character', () => {
    var nonSpaceCharacter = isRealString('ah ha');

    expect(nonSpaceCharacter).toBe(true);
  })
})