// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = arr => {
  // 1) start at the right of the arr
  arr.reverse()
  const lastDigit = arr.shift();
  // 3) sum all digits of the credit card number
  let sum = arr.reduce(
      // (acc = accumulator, el = element, i = index)
      (acc, el, i) => (
      // 2) every other digit is doubled. If doubled num is greater than 9, minus 9
      // if i mod 2 does not equal 0 (odd index)
      i % 2 !== 0 ? 
      // true (even): acc + el, false (odd): acc + (el*2), but if greater that 9
      acc + el : acc + ((el *= 2) > 9 ? 
      //true: el - 9, false: el = el
      el - 9 : el)),
      // acc starts at lastDigit
    lastDigit
  );
  // 4) is sum mod 10 is 0 return true
  return sum % 10 === 0;
};

// Testing funciton
//console.log(validateCred(valid1))

const findInbvalidCards = (arrOfArrs) => {
  const returnArr = [];
  arrOfArrs.forEach((arr) => {
    if (!validateCheck(arr)) {
    returnArr.push(arr)
    }
  });
  return returnArr;
}
const idCompany = {
  3: 'Amex',
  4: 'Visa',
  5: 'Mastercard',
  6: 'Discover'
}

const idInvalidCardCompanies = (arrOfArrs) => {
  const numId = [3,4,5,6];
  const arrOfComp = [];
  arrOfArrs.forEach((arr) => {
    if (numId.includes(arr[0]) && !arrOfComp.includes(idCompany[arr[0]])) {
      arrOfComp.push(idCompany[arr[0]]);
    }
  })
  return arrOfComp;
}


console.log(idInvalidCardCompanies(mystery5))