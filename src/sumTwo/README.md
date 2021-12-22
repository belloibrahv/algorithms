# TWO SUM

[Source]('https://leetcode.com/problems/two-sum/')

### Approach 1: Using brute force

Brute force is basically anon optimized approch to solve the problem. below are the required steps to solve the two-sum problem.

1. passing through the array two twice to get the both (two) values that sums to the target value.
2. check if the sum of the first-iteration value and second-iteration value is the same as the `target` value.
3. if step 2, is true return the position(indices) of both values in an array. Otherwise go back to step 1.

Facts about the brute force approach:

- It uses the nested loop concept to iterate the values od the array which runtime can be O(N) \* O(NUMBER OF NESTED LOOPS).
- Due the fact that we would iterate through the array twice to get sum of the value that would is equal to the `target` value. the runtime of these solution would be O(N^2) or Exponential time complexity.
- The O(N^2) is considered as not optimal.

### Approach 2: Using two passing

This solution approach also required to pass to each values in the array, but in other for which is referred to as two pass (basically passing the array for different operation). below shows the solution approach to solve the problem.

step 1: pass through the array first time.
step 2: store the iteration value as key and it index as the key-value in the hashMap (dictionary, object, associative array etc.).
step 3: pass through the again the second time.
step 4: find the difference of both the `target` and itaraion value (`target - iteration-value`).
step 5: if the diifference value exist in the map, return the difference which is key(holds the indices of as it value) in the hashMap and the current iteration-indices.

Facts about the two-pass solution approach

- Passing through the the array in two places, uses the O(2\*N) runtime which is optimal enough to our solution and its better than O(N^2).
- In O(N) or linear runtime we only need to drop the coefficient which is 2 to remain O(N).

### Approach 3: Two Pass

The two pass solution only need to pass through the array once, then adds the itearation value and it index to the hashMap table, only when the value doesn't exist in the map. below include the steps to solve the problem.

1. pass through the array once.
2. find difference of both `target` value and iteration value.
3. check if the difference exist in the hashMap.
4. if step 3 is true, return the the value of the hashMap(difference) and the current iteration index. Otherwise store the iteration value and index as key-value pair in the hashMap.

Facts about the two pass solution approach:

- It passes through the array once and carries carries out it operation which is O(N) for arrays and O(1) for it operations.
- The particalar approach is uses the hash map algorithm to optimize the solution that we only need to pass through array once.

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
