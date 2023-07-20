/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `coinSum`:

// aka, there's only one way to make 1p. that's with a single 1p piece
coinSum(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
coinSum(2) === 2
*/

// add a cache of denominations, num of coins, our amount
function coinSum(num, i = 8, currency = [1,2,5,10,20,50,100,200]) {

    // Base Case 1:
    // if we hit zero return 1
    if (num === 0) return 1;

    // Base Case 2:
    // if sum is less than zero return zero
    if (num < 0) return 0;

    // Base Case 3:
    // if we iterated through the array without a solution, return 0
    if (i === 0) return 0;

    // Recursive Case:
    // return coinSum() added to another coinSum function
    // we want to the iterate through the solution space by iterating throuhg the currency array
    // the first coinSum will only hit base case 3, the second coinSum will hit base case 1 or 2!

    /// how we populate the cache is wrong 
    return coinSum(num, i - 1, currency) + coinSum(num - currency[i - 1], i, currency);
};

// console.log(coinSum(100))

// coinSum(num - currency[0], currency) + coinSum(num, currency.slice(1))

// O(n) --> O(n * m) where m is the number of arrays created -> m = 2
const removeDup = (arr) => {
    const seen = new Set();
    // iterate through the for loop 
    for (let el of arr) {
        seen.add(el); // set can't have duplicate values (by def) ()
    }
    return [...seen]
};

const removeDup2 = (arr) => {
    // same process as above, just compressed syntax
    return [...new Set(arr)]
};





