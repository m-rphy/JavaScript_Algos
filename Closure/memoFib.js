// memoization of fibonacci

function memoFactorial(num, cache) {
	console.log(cache)
	// creates a cache object or preserves the existing cache object
	cache = cache || {};

	// If the number is cached, return the result
	if (cache[num]) return cache[num];

	// If the number is 1 or 0, return 1 (the definition of 1! = 0! = 1)
	if (num <= 1) return 1;

	// Use recursion to fill out the cache
	return cache[num] = memoFactorial(num-1, cache) + memoFactorial(num - 2, cache);
};


// They're is only a slight difference between fatorial and fibonacci (line 12 and line 30 is all)

function memoFibinacci(num, cache) {
    console.log(cache)
	// creates a cache object or preserves the existing cache object
	cache = cache || {};

	// If the number is cached, return the result
	if (cache[num]) return cache[num];

  	// If the number is 1 or 0, return 1 (the definition of Fib(1) = 1 & Fib(0) = 0
	if (num <= 1) return cache[num] = num;
  
	// Use recursion to fill out the cache
	return cache[num] = memoFibinacci(num-1, cache) + memoFibinacci(num - 2, cache);
}

