/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    // variable to hold on to
    const cache = {};
    let maxCount = {num:0, count:0};
    let biggest = -Infinity;
    // iterate through the the array
    for (let el of array) {

        // update cache count if the el is not cached
        if (!cache[el]) {
            cache[el] = 1;
            // edge case: if all the counts are 1
            if (cache[el] > maxCount.count && el > biggest) {
                biggest = el;
                maxCount.count = cache[el];
                maxCount.num = el;
            };
        } else if (cache[el]) {
            cache[el]++
            // if the count is greater that previous count and el is greater than largest update 
            if (cache[el] > maxCount.count && el > biggest) {
                biggest = el;
                maxCount.count = cache[el]
                maxCount.num = el
            }
        }
    }
  return maxCount.num
};

console.log(mode([3]))



/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {

    // flatten the input array
    const flatArr = array.flat(Infinity);

    // use the same logic as above
    const cache = {};
    let maxCount = {num:0, count:0};
    let biggest = -Infinity;
    // iterate through the the array
    for (let el of flatArr) {
        // if el is larger than largest update largest variable
        
        // update cache count if the el is not cached
    
        if (!cache[el]) {
            cache[el] = 1
            // edge case: if all the counts are 1
            if (cache[el] > maxCount.count && el > biggest) {
                biggest = el;
                maxCount.count = cache[el];
                maxCount.num = el;
            }
        }
        // else, update the cache count
        else if (cache[el]) {
            cache[el]++
            // if the count is greater that previous count and el is greater than largest update 
            if (cache[el] > maxCount.count && el > biggest) {
                biggest = el;
                maxCount.count = cache[el]
                maxCount.num = el
            }
        }
    }
  return maxCount.num
};

// console.log(modeNested([7, [[5, [8], 8], 2, 5]]))