// Brute force approach

const twoSum = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return [i, j];
      }
    }
  }
};

const twoSum2 = (list, target) => {
  let hashMap = {};

  for (let i = 0; i < list.length; i++) {
    hashMap[list[i]] = i;
  }
  for (let i = 0; i < list.length; i++) {
    const complement = target - list[i];

    if (complement in hashMap && hashMap[complement] !== i) {
      return [i, hashMap[complement]];
    }
  }
};

const twoSum3 = (list, target) => {
  let hashMap = {};

  for (let i = 0; i < list.length; i++) {
    let complement = target - list[i]; // 10 - 2 = 8

    if (complement in hashMap) {
      return [hashMap[complement], i];
    }
    hashMap[list[i]] = i;
  }
};

twoSum3([2, 3, 5, 7, 8], 7);

export { twoSum, twoSum2, twoSum3 };
