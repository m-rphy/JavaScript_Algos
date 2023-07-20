/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

// the doubling algorithim
//         |
// example v
/*
binToDec('0101') -> 5
(0 * 2) + 0 = 0;
(0 * 2) + 1 = 1;
(1 * 2) + 0 = 2;
(2 * 2) + 1 = 5;
*/


function binToDec(binString){
    
    // turn each string element into a number and populate an array with the number
    let bin = binString.split('').map(el => {
       return parseInt(el)
    });
    // initialize a number the hold the decimal output
    let decimal = 0;
    // iterate through the array of binary numbers
    for (let i = 0; i < bin.length; i++) {
        // for each element of the binaray array
        // double the previous decimal value and add the element to the new decimal value
        decimal = (decimal * 2) + bin[i];
    }
    return decimal
    
}

// console.log(binToDec('0101'))