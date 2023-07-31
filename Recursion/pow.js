/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  let num = 1;
  for (let i = 0; i < power; i++) {
    num *= base;
  }
  return num;
}

console.log(pow(2,0))
/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power, num = 1) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  if (power > 0) return powRecurse(base, power - 1, num * base);

  return num
};

// console.log(powRecurse(4,2))





// Iterative Javascript program to implement pow(base, power) 
  
/* Iterative Function to calculate (base^power) in O(log(y)) */
function power(base, power) { 

// Initialize result 
    let result = 1; 
  
    while (power > 0) { 
        // If power is odd, multiply base with result 
        if (power & 1) {
          result = result * base;
        } 
        // y must be even now 
        power = power >> 1; // power = power/2 
        base = base * base; // Change x to x^2 
    } 
    return result; 
} 
// Driver program to test above functions 
console.log(power(3, 5))