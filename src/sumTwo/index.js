// First approach
// Using function declaration

// function twoSum(arr, target) {
//   if (arr.length < 1) {
//     return null;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     // O(N)
//     for (let j = 0; j < arr.length; j++) {
//       // O(N)
//       if (i === j) continue;

//       const finSum = arr[i] + arr[j];
//       if (finSum === target) return [i, j];
//     }
//   }
// }

// Second approach ::: Pass Two

// const twoSum = function (arr, target) {
//   if (arr.length < 0) {
//     return null;
//   }

//   let hashMap = {};

//   arr.forEach(function (first, second) {
//     hashMap[first] = second;
//   });

//   for (let index = 0; index < arr.length; index++) {
//     const diff = target - arr[index];

//     if (diff in hashMap && hashMap[diff] !== index) {
//       return [index, hashMap[diff]];
//     }
//   }
// };

// Third approach ::: One Pass

const twoSum = (list, target) => {
  let hashMap = {};

  for (let i = 0; i < list.length; i++) {
    let complement = target - list[i]; // 10 - 2 = 8

    if (complement in hashMap) {
      return [hashMap[complement], i];
    }
    hashMap[list[i]] = i;
  }
};

export default twoSum;
