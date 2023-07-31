// This challenge is presents a wonderful oportunity to 
// use closed over variables to solve this problem, 
// because we want to remember data about a called function.
// Closed over varibles allow for persistent memory about 
// have many times a function has been called
function after(timesCalled, callback) {
  // counts how many times the callback is called
  // it starts at one to account for the fact that computers
  // default to counting from zero
  let counter = 1; 
  // Initial callback output
  // But because we don't know the data type we
  // won't initialize it to any specific value
  let result; 
  // closure requires us to have a function that is output from after
  // Using the rest operator => (...)
  function outputFunc(...args) {
    // If the input variable timesCalled is less than or equal to
    // our counter variable, we know that the function
    // has been invoked enough, and we return the result
    if (counter >= timesCalled) {
      counter++
    	return callback(...args) // returning the function value with the
      // the spread operator => (...)
      }
    // If timesCalled is less than counter, we add 1 to counter
    else if (timesCalled > counter) {
      counter++
      return result //This will be undefined
    }
  }; // end of output
  
  return outputFunc; // output our function "output"
}





const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed