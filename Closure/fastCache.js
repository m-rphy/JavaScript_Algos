/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = (func) => {
  
    // create a cache within a closed scope
    let cache = {};

    // Initialize a closed scope
    return function (input) {
    // using conditions to control the process flow
    // If there is an input in the cache, return the cached result
    if (cache[input]) {
        return cache[input];
        }
    // put the result in the cache and return the results
    // of calling that function
    else {
        cache[input] = func(input);
        return cache[input];
        }
    }
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/


const fastCacheAdvanced = (func) => {

    // create a cache within a closed scope
    let cache = {};

    // Initialize a closed scope
    return function (...inputs) {

        const inputStr = JSON.stringify(inputs)

        if (cache[inputStr]) {
            return cache[inputStr];
        } else {
            cache[inputStr] = func(...inputs);
            return cache[inputStr];
        }
    }
};