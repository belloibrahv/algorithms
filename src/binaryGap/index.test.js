import binaryGap from '.'

describe('binary gap', () => {
  test('converts number to binary', () => {
    expect(binaryGap(500)).toEqual(2);
  });
});
