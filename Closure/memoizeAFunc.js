// Memoization

function memoization(func) {

	// create a cache within a closed scope
	let cache = {};

	// Initialize a closed scope
	function inner (...arg) {

		// solves the composite data type 
		const key = JSON.stringify(...args);
		// using conditions to control the process flow
		// If there is an input in the cache, return the cached result
		if (cache[key]) {
			return cache[key];
		}
		// put the result in the cache and return the results
		// of calling that function
		else {
			// storing the arg as the key and output of func(arg) as the value
			cache[key] = func(...arg);
			return cache[key];
		}
	}
	return inner;
}