// memoization (also climbing stairs)

// Climbing Stairs => climbStaris(s) == FibFunc(s+1)

// C(n,k) = n! ÷ k!(n-k)!
// -->  n! ÷ 2(n-2)!; n = 3 --> 6 ÷ 2(1) = 3

function climbStairs(n, memo = {1:1, 2:2}) {
 	// if memo has n return n's value
 	if (memo[n]) return memo[n];
  
 	// if memo doesn't include n, calculate it's value
	return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
}

// They're is only a slight difference between fatorial and fibonacci (line 12 and line 30 is all)

function memoFibinacci(num, cache) {
	
	// creates a cache object or preserves the existing cache object
	cache = cache || {};

	// If the number is 1 or 0, return 1 (the definition of Fib(1) = 1 & Fib(0) = 0
	if (num <= 1) return cache[num] = num;

	// If the number is cached, return the result
	if (cache[num]) return cache[num];

	// Use recursion to fill out the cache
	return cache[num] = memoFibinacci(num-1, cache) + memoFibinacci(num - 2, cache);
};


// Binary Search Tree with Recursion //////

/* the key in each is either

greater that the key stored in the left seub tree

OR 

less than the key stored in the right side of the tree

*/

// define the function
const searchBST = function(root, val) {
	// if the tree is empty OR the value is the root, return root
    if (root == null || val == root.val) return root;
    // else if value is less than root is, return root.left(revcusive call), otherwise return
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};
