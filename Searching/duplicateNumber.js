/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
  // cache for seen numbers
  const cache = {};
  let dup;
  // iterate through the the array
  for (let el of array) {
      // update cache if the el is not in cached
      if (!cache[el]) {
          cache[el] = 1;
      } else if (cache[el]) {
          // else return the el
          return el
      }
  }
};

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    // initialize a cache for seen numbers
    let cache = {}

    //initialize a two points (right and left)
    let r = array.length - 1
    let l = 0;
    
    // while left is less than right
    while ( l <= r) {
        // if right el is not in cache, update cache
        if (!cache[array[r]]) {
            cache[array[r]] = 1    
        } 
        else if (cache[array[r]]) {
            // else return right point el
            return array[r];
        }
        // decrement right pointer
        r--;

        // left pointer
        // do same as above for left pointer
        if (!cache[array[l]]) {
            cache[array[l]] = 1
        } else if (cache[array[l]]) {
            return array[l]
        }
        // only increment instead
        l++
    }
};