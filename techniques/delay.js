//delay the output of a function


function delay(callback, milliSec) {
  // closure requires us to output a function
  function output(...args){
    // returning setTimeout to return the callback and the delay of the callback
      return setTimeout(() => {callback(...args)}, milliSec) 
  }; // end of output function
  return output // return the output function "output"
}


// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second