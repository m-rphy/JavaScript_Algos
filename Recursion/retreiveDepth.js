/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/
// recursive solution:
// const retrieveDepth = (arr, depth,  count = 1, result = []) => {
//   // iterate through the arr
//   for (let i = 0; i < arr.length; i++) {
//     // if the array element is an array AND count is less than depth
//     if (Array.isArray(arr[i]) && count < depth) {
//       // concatinate the result array with the returned result array from the recursive call
//       result = [...result, ...retrieveDepth(arr[i], depth, ++count)]
//       // else if the array element is not an array, push the element to the result arr
//     } else if (!Array.isArray(arr[i])) {
//       result.push(arr[i])
//     }
//   }
//   return result;
// };

const retrieveDepth = (arr, depth,  count = 1, result = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && count < depth) result = [...result, ...retrieveDepth(arr[i], depth, ++count)]  
     else if (!Array.isArray(arr[i])) result.push(arr[i])
  }
  return result;
};

// PASSES ALL TESTS

// console.log(retrieveDepth([2, [4, [7], 1], 5], 3)) // -> [2, 4, 7, 1, 5]  
// console.log(retrieveDepth([2, [4, [7], 1], 5], 2)) // -> [2, 4, 1, 5] 
// console.log(retrieveDepth([2, [4, [7], 1], 5], 1)) // -> [2, 5]


/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

// Almost the same logic as above, only with are pushing the entire array, rather tha
// skipping over it

const flattenDepth = (arr, depth,  count = 0, result = []) => {
  // same as above
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && count < depth) {
      result = [...result, ...flattenDepth(arr[i], depth, ++count)]
      // changed to else and push the nested the nested array to result array
    } else {
      result.push(arr[i])
    }
  }
  return result;
};

// PASSES ALL TESTS

// console.log(flattenDepth([2, [4, [7], 1], 5], 0)) // -> [2, [4, [7], 1], 5] // the same array
// console.log(flattenDepth([2, [4, [7], 1], 5], 1)) // -> [2, 4, [7], 1, 5] // flattened at one level
// console.log(flattenDepth([2, [4, [7], 1], 5], 2)) // -> [2, 4, 7, 1, 5] // flattened at two levels
// console.log(flattenDepth([2, [4, [7], 1], 5], 3)) // -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
// flattened array