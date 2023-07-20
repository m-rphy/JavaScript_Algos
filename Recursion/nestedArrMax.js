
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

function nestedArrMax(arr, maxNum = -Infinity) {
    if (arr.length === 0) return undefined;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          maxNum = Math.max(maxNum, nestedArrMax(arr[i]))
        } else if (!Array.isArray(arr[i])) {
            maxNum = Math.max(arr[i], maxNum)
        }
      }
      return maxNum;
};

// const arrNested = [1, 3, 10, 6]; // -> 10
// const arrNested = [1, [3, [10], 6]]; // -> 10
// console.log(nestedArrMax(arrNested)); 

/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1
nestedArrMaxLevel(arrNested, 2);
-> 6
nestedArrMaxLevel(arrNested, 3);
-> 10
*/

const nestedArrMaxLevel = (arr, level,  count = 1, maxNum = -Infinity) => {
    if (arr.length === 0) return undefined
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && count < level) {
            maxNum = Math.max(maxNum, nestedArrMaxLevel(arr[i], level, ++count))
        } else if (!Array.isArray(arr[i])) {
            maxNum = Math.max(maxNum, arr[i])
        }
    }
    console.log(arr)
    return maxNum;
  };

const arrNested = [1, [3, [10], 6]];
console.log(nestedArrMaxLevel(arrNested, 1)); // -> 1
console.log(nestedArrMaxLevel(arrNested, 2)); // -> 6
console.log(nestedArrMaxLevel(arrNested, 3)); // -> 10