/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword, count = 0) => {
    for (let el of array) {
        if (el === keyword) count += 1;
        else if (Array.isArray(el)) {
            count = keywordCount(el, keyword, count)
        }
    }
  return count;
};
// console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')) // -> 2
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')) // -> 3
/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/



const keywordMode = (array, hash = {}, max = 1) => {
    // Step 1: flatten array
    const flatArray = array.flat(Infinity)
    // console.log(flatArray)

    // Step 2: Count instances of keyword in flattened array
    for (let el of flatArray) {
        if (!hash[el]) {
            hash[el] = 1;
        }
        else if (hash[el]) {
        hash[el] += 1;
            if (hash[el] > max) {
                max = hash[el]

            }
        }
    }
    // Step 3: populate an array based on max occurance in flattened array
    let result = [];
    const pastInHash = {}
    for (let el of flatArray) {
        if (hash[el] === max && !pastInHash[el]) {
            pastInHash[el] = el
            result.push(el)
        }
    }
    return result
};


console.log(keywordMode(['y', [], ['hi'], [['bright', ['x'], []], ['z', 'x']], 'hi', [[], ['y']], [], 'light']))