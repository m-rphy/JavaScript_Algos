// How do you calculate the number of numerical digits in a string?

/*
To cound the number of numerical digits in a string, we can use the 
replace() method to replace all the non digit character with an empty
string and then get the length of the string with the replaced characters 
*/

function getNumberOfDigits(str) {
// We use RegExp to replace any non numerical char with an empty string and then find the length
	return str.replace(/[^0-9]/g, '').length
}
// The forward slashes / / mark the beginning and end of the regular expression
// The part between the square brackets [] is called a character class
// The caret "^" symbol means "not the following", in other words we're matching anything but a range of digits from "0-9"
// g in the RegExp is a global variable