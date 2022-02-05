import removeDuplicate from '.'

describe('Remove Duplicates', () => {
  test('And return the length of the number array', () => {
    expect(removeDuplicate([1, 1, 2])).toEqual(2);
  });
});
