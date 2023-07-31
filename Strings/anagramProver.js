// Can you prove two string are an anagram?

function anagramProver(str1, str2){
  // If the two are different lengths, then it is clearly not an anagram
    if(str1.length !== str2.length) {
        return false;
     };
  // If they are the same lengths we test whether the can be made to be the same string
  // first we make all letters the same case
  // then we split the strings up into an array of all the letters
  // we sort the array of letters in a consistent manner
  // join the sorted arrays
  // and if they are the same array we set a variable to true
  // and if they are not the same array, that variable becomes false
  	const bool = str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
  // return that variable (we could just return the right hand side of the variable, but the is easy to read imo)  
  return bool;
}
const string1 = 'a gentleman';
const string2 = 'elegant man';
console.log(anagramProver(string1, string2));
