import { twoSum, twoSum2, twoSum3 } from ".";

describe("twoSum using brute-force", () => {
  test("returns two indices of the array that sums to 3", () => {
    expect(twoSum([1, 2, 3, 4, 5], 3)).toEqual([0, 1]);
  });
});

describe("twoSum using two-pass", () => {
  test("returns two index that sums to 9", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});

describe("twoSum using one pass", () => {
  test("returns two index that sums to 6", () => {
    expect(twoSum3([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

describe("twoSum using one-pass", () => {
  test("returns two index that sums to 6", () => {
    expect(twoSum3([3, 3], 6)).toEqual([0, 1]);
  });
});
