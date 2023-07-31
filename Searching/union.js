// union among arrays

function union(arrays) {
	// use reduce to iterate through the outer array of arrays (return evaluated result)
  // initialize an empty array to be our output array
  return arrays.reduce((acc, current) => {
    // iterate through each inner array using forEach
			current.forEach((el) => {
      	// If the element is not present in the accumulator array, add it to 
      	// the acc array
    	if (!acc.includes(el)){
        acc.push(el);
        }
      }); // End of the forEach iteration
    	return acc
 	 }, []) // The [] initializes the acc array by being the second arg of reduce
}

const union = (arrays) => {
	return arrays.reduce((acc, curr) => {
		 if(acc !== curr) {
		   acc.concat(curr)
		 }
		 []})
   };

function union(arrays) {
	// iterates through arrays
	  return arrays.reduce((current, acc) => 
	  // reduce to an array of a new set that concats all equal values
		[...new Set([...current,...acc])]);
  };

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]