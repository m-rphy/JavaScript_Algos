/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

//  * => The shifting off the element greatly increases the time complexity, because the 
// the whole array needs the be re-indexed. This is addressed in the next solution!

// this is a helper functiona that merges the arrays
function merge(left, right) {
  // initialize an empty array
  let arr = [];
  // initialize a while loop
  while (left.length && right.length) {
      // if right element is greater than the left element push, left to arr and shift* it off
      if (left[0] < right[0]) arr.push(left.shift());
      // else push right[0] to array and shift it off
      else arr.push(right.shift());
  }
  // return the sorted array
  return [...arr,...left,...right];
}

function mergeSort(arr) {
  // find the mid point
  const mid = Math.ceil(arr.length/2);
  // base case 1: 
  if (arr.length < 2) return arr;

  // splice mutates the input array -> arr
  const left = arr.splice(0, mid);
  // recursive case:
  return merge(mergeSort(left), mergeSort(arr));
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Optimized ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////


function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  // here we use two pointers instead of shift. This eliminates the 
  // need to re-index the array. The logic is the same though
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // One of the input arrays may be present here, but one definitely is not. We return both 
  // with the spread operator, because we can't know which one ought to be returned/
  return [...result, ...left, ...right]
}

function mergeSort(arr) {
  // EDGE CASE:
  if (arr.length <= 1) {
    return arr;
  }
  // Find the middle of the array to be sorted
  const middle = Math.floor(arr.length / 2);
  // break it up into two arrays. A left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // recursively call mergeSort and merge the their returns!
  return merge(mergeSort(left), mergeSort(right));
}