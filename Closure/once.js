// once


// Input : callback
// Output : function (necessary for closure)

function once(callback) {
  // A bool tracks if the callback has been called
	let hasBeenCalled = false;
  // a variable will hold on to the result of the
  // first time the callback was called
  let cachedResult;
  function oncifiedCallback(...args) {
    // Using a conditional the control if 
    // we change the cached result and hasBeenCalled bool
    if(!hasBeenCalled) {
      // The first time we call the callback,
      // we change the the varaibles
      cachedResult = callback(...args)
      hasBeenCalled = true
    }
    // If it is a second, third, etc time, we simply
    // return the cached result
    return cachedResult;
  }
  // Return the inner function, completing the closure
  return oncifiedCallback;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});
// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7