# TWO SUM

[Source]('https://leetcode.com/problems/two-sum/')

## Approach to solving code challenge

From the given problem, where we have an array of numbers and as well a `target` value in which two numbers in the array sums up to the target number value.

To solve this problem, firstly we consider what the time complexity of the algorithm would be. to iterate through the array is O(N), so we would have to iterate through the array twice to get the sum up values which would be equal to the `target` number.
 
For example : l = [2, 3, 4, 5, 6, 9] and target = 11. return [indices, indices] 
0(N) + O(N) = O(N^2).
O(N^2) can also be called exponential complexity.
iterating through the array twice gives up the below values as our output.

| 2 2 | 3 2 | 4 2 | 5 2 | 6 2 | 
| 2 3 | 3 3 | 4 3 | 5 3 | 6 3 |
| 2 4 | 3 4 | 4 4 | 5 4 | 6 4 |
| 2 5 | 3 5 | 4 5 | 5 5 | 6 5 |
| 2 6 | 3 6 | 4 6 | 5 6 | 6 6 |
| 2 9 | 3 9 | 4 9 | 5 7 | 6 9 |

so the values which sum is equal to the `target` value, would return it indices.

#### solution steps

step 1: READ array, target 
step 2: iterate through the array twice to get two numbers of the array at once
step 3: check if both numbers are not of the same indice, if YES skip numbers, otherwise continue to the stage
step 4: sum both numbers
step 5: check if the sum number is equal to the target number values, return both numbers indices inside an array. otherwise continue to next element 
