# TWO SUM

[Source]('https://leetcode.com/problems/two-sum/')

_Note: Ensure to uncomment codes to the defined approaches to test solutions. at `index.js`_

### Approach 1: Using brute force

Brute force is a basically the first approach and as well a non optimized solution to a algorithmic problem. Below includes the brute forced approach steps to solve the two-sum coding challenge excercise.

1. iterate through the array twice to get the first iteration value and the second iteration values that sums to the target value (using nested loop).
2. check if the sum of the first-iteration value and second-iteration value is the same as the `target` value.
3. if step 2, is true return the position(indices) of both the first-iteration and second-iteration values of the array. Otherwise go back to step 1.

Facts about the brute force approach:

- It uses the nested loop concept to iterate the values of the array which runtime can be O(N).
- Due the fact that we would iterate through the array twice to get sum of the value that would be equal to the `target` value. the runtime of these solution would be O(N^2) or Exponential time complexity.
- The O(N^2) runtime is considered as not optimal solution.

### Approach 2: Two Pass

This solution uses the two-pass approach in which the iteration only required to go through array, to basically carry out the required operations. below shows the solution approach to solve the problem.

step 1: iterate through the array first-time.
step 2: store the iteration value as key and it index as the value of the key in the hashMap (dictionary, object, associative array etc.).
step 3: iterate through the array second-time.
step 4: find the difference of both the `target` and itaraion value (`target - iteration-value`).
step 5: if the difference value exist in the map, return the value of the key from the hashMap and the current iteration-indices.

Facts about the two-pass solution approach

- Passes through the array in two difference places, uses the O(N) + O(N) = O(2N) runtime which is optimal enough to our solution and and as well its better than O(N^2).
- In O(N) or linear runtime we only need to drop the coefficient which is 2 to remain O(N).

### Approach 3: One Pass

The one pass solution approach only need to pass through the array once, then adds the itearation value and it index to the hashMap table, only when the value doesn't exist in the map. below include the steps to solve the problem.

1. pass through the array once.
2. find difference of both `target` value and iteration value.
3. check if the difference exist in the hashMap.
4. if step 3 is true, return the the value of the hashMap(difference) and the current iteration index. Otherwise store the iteration value and index as key-value pair in the hashMap, then go back to step 2.

Facts about the two pass solution approach:

- It passes through the array once and carries carries out it operation which is O(N) for arrays and as well as operations O(1).
- The particalar approach is uses the hashMap algorithm to optimize the solution in O(N) which runtime is faster and efficient than others approaches.

#### Prerequisite kwonledge to solve the problem

- How to solve problem (breaking it to chunk).
- Time complexity
- HashMap Table

Hash Table (also known as HashMap) is used to map keys to values:

- It uses the Hash function which is an algorithm that produces the index of where values can be found or stored in the table:
- Hash table uses arrays, and it maps the `lebels` to the indexes of the array using the hash function. `Ex:` m={'lebels': 12}; m[lebel] output: 12
- the hash function is the algorithm that performs actions on the hash table.
- the common way to implement a hashMap is using `array` and `hash` function.

They're used to implements:

- Associative array
- Mapping of key value pairs or
- The map data struture or objects
- The average time for each look up isn't tied to the number of elements stored in the table. Average time is O(1)
