/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

// NOTE -- Slower than two pointer solution, but still O(n)

var twoSum = function(nums, target) {
  // initialize a hashmap
    const hash = {};
    // initialize a compliment variable
    let comp
    // iterate through the arr
    for (let i = 0; i < nums.length; i++) {
        // calculate the compliment
        comp =  target - nums[i]
        // if the complimnet is in the hash
        if (comp in hash) {
            // return the indices
            return true; //[hash[comp]+1, i+1]
        }
        // add each element and comp to the hash
        hash[nums[i]] = i
    }
    return false;
};

// This is an already sorted array, so use two indices to search
// Two pointer Solution is much faster!!!

// function twoSum(numbers, target) {
  // // initialize the two pointers
  // let l = 0;
  // let r = numbers.length - 1; 

  // // while left pointer is less than right pointer (l and r meet in the middle)
  // while (l < r) {
  //   // initialize a sum to left and right elements
  //   const sum = numbers[l] + numbers[r];
  //   // the return condition 
  //   if (sum === target) {
  //     // return indexes if true
  //     return true //[l + 1, r + 1];
  //   }
  //   // If sum is less that target, increase left
  //   if (sum < target) {
  //     l++;
  //     // else decrease right!
  //   } else {
  //     r--;
  //   }
  // }
  // return false;
// }

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/


/// SOOOOO 

function threeSum(arr, target) {
  // initialize the two pointers
  let l = 0;
  let ll = l + 1;
  let r = arr.length - 1; 
  const arr = arr.sort((a, b) => a - b)

  // while left pointer is less than right pointer (l and r meet in the middle)
  while (l < r) {
    // console.log(l, r)
    // initialize a twoSum value of left and right elements
    const twoSum = arr[l] + arr[r];
    let threeSums;
    console.log('twoSum: ',twoSum)
    // go into three sum portion
    if (twoSum < target) {
      // initialize a new pointer
      let ll = l + 1;
      // console.log(ll)
      while (ll < r){
        // initialize a threeSum value
        threeSums = twoSum + arr[ll]
        console.log('threeSum: ',threeSums)
        // if the threeSum value is found...
        if (threeSums === target) return true;
        // else increment the ll pointer until threeSum is greater than twoSum
        if (threeSums < target) ll += 1;
        if (threeSums > target)  {
          r -= 1;
          break;
        }
      }
    }
    // If twoSum is less that target, increase left
    if (threeSums < target) {
      l++;
      // else decrease right
    } else {
      r--;
    }
  }
  return false
}

const nums = [-1, 4, 6, 9, 12]
console.log('It ran')
console.log(threeSum(nums, 9))