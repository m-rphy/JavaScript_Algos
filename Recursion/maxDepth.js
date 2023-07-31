/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const maxDepth = (arr) => {
    // this variable keeps track of the current depth (obviously zero currently)
    let depth = 0
    // iterate through the array
    for (let el of arr) {
        // if an element of the the array is an array...
        if (Array.isArray(el)) {
            // Reassign the current maxDepth to be the bigger of the these two
            depth = Math.max(maxDepth(el), depth)
        }
    }
    // evertime we "come out" of an array, we increase the depth!!
    return depth + 1;
 };

const arrNested2 = [[2, 1], 8, 3, [4], 5] // -> 2
// const arrNested3 = [3, [6, [7]], 2] // -> 3
// const arrNested4 = [4, [0, [[3], 2]], 2, 7, 8, [1]]; // -> 4
console.log(maxDepth(arrNested2)); 