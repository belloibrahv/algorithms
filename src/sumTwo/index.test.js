import twoSum from '.';
describe('twoSum', () => {
  test('test-1: To return two index that sums to 3', () => {
    expect(twoSum([1,2,3,4,5],3)).toEqual([0,1]);
  })
})

describe('twoSum', () => {
  test('test-2: To return two index that sums to 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  })
})

describe('twoSum', () => {
  test('test-3: To return two index that sums to 6', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  })
})

describe('twoSum', () => {
  test('test-4: To return two index that sums to 6', () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
  })
})
