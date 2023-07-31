function convertToRoman(num) {
  // create a key
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  // initialize a string to return
  let romanNum = '';
  // initialize a counter variable
  let i = 0;
  // iterate through the key
  for ( i in lookup ) {
    // if we find a value in the key that is less than 
    // the value, add it to our string and subtract it 
    // from the input number
    while ( num >= lookup[i] ) {
      romanNum += i;
      num -= lookup[i];
    }
  }
  return romanNum;
}