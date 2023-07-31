// Reduce in JS


function reduce(array, callback, initial) {
  // Checking if the first arg is an array
if (Array.isArray(array)){
  // creating an accumulator
  let acc;
  // Setting up the initial values
  if (initial === undefined){
    acc = array[0]
    array = array.slice(1);
    
  } else {
    acc = initial;
  }
  // Looping through the array and applying the callbacks
  array.forEach(function(el, index, arr){
    acc = callback(acc, el, index, arr);
  });
  // returning the accumulator
  return acc;
	}// if the first arg isn't an array, and error is sent
  return 'Type Error: The first arg should be an array'
}




// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8