/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  let l = 0;
  let r = array.length - 1
  while (l <= r) {
    if (array[l] === target || array[r] === target) return true
    else {
      l += 1;
      r -= 1;
    }
  }
  return false
};

const nums = [-3, 0, 8, 13, 37]
console.log(findInOrderedSet(nums, 0));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false


/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/


// TODO Can be optimize!!!
const findIn2dMatrix = (matrix, target) => {
  // two pointer for the inner arrays
  let L = 0;
  let R = matrix.length - 1
  while (L <= R) {
    // each inner array has two points as well
    let R_l = 0;
    let R_r = matrix[R].length - 1;
    let L_l = 0;
    let L_r = matrix[L].length - 1;
    while (R_l <= R_r && L_l <= L_r){
      // true conditions
      if (matrix[R][R_l] === target || 
          matrix[R][R_r] === target || 
          matrix[L][L_l] === target || 
          matrix[L][L_r] === target) return true;
      // increment the inner array pointers 
      else {
        // 
        R_l += 1;
        R_r -= 1;
        L_l += 1;
        L_r -= 1;
      }
    }
    L += 1;
    R -= 1;
  }
  return false
};

const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
console.log(findIn2dMatrix(matrix, 13)); // -> true
console.log(findIn2dMatrix(matrix, 42)); // -> false