// Can you reverse a string


const string1 = 'This is a string to be reversed';

const reverseString = (str) => {
	// Turn the string into an array with the spread operator
	const arrStr = [...str];
	// Initalize a new array that is to be returned
	const reversedStr = [];
		// Iterate through that array, beginning with the last element and decrementing to sero
	for (let i = arrStr.length - 1; i >= 0; i--) {
		// push each element of arrStr to reversedStr
		reversedStr.push(arrStr[i]);
	};
  // Return the reversed string array joined together by empty strings
	return reversedStr.join('');
}

// Log the output to make sure the function is working properly

console.log(reverseString(string1)); // should log => 'desrever eb ot gnirts a si sihT'