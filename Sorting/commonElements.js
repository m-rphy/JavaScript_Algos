/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

*/

const commonElements = (...args) => {

	// iterate through with reduce
	const res = args.reduce((current, acc) => 
  	    // filtering out the elements of current that don't match the elements of acc
    	current.filter((el) => acc.includes(el)));

    if (res.length > 0) return res;

    return 'Nothing in Common!'
}


/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

// overall this algorithim is ~ O(3n) -> ~ O(n)

const commonElementsOptimized = (...args) => {

    // make a cache a result arr
    const res =[]
    const cache = {}
    const argsNum = args.length
    // iterate through the args arrays -> iterating through all the elements once O(n)
    for (let el of args) {
        for (let i of el) {

            (!cache[i]) ? cache[i] = 1 : cache[i]++;
        }
    }
    // Creating a keys arr -> O(n)
    const keys = Object.keys(cache)
    
    // iterating through the keys arr -> O(n)
    for (let el of keys) {

        (cache[el] === args.length) ? res.push(el) : false;
    }
    if (res.length > 0) return res;

    return 'Nothing in Common!'
}

// const arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
// const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
// const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

// console.log(commonElementsOptimized(arr1, arr2, arr3))   //-> [2, 3, 2000, 'dog']