const balancedParens = input => {

  // initialize a stack
  const stack = [];
  
  // initialize a hashmap
  const hash = { ')': '(', ']':'[', '}':'{', };
  
  // santize string so it only hase parens, square/curly brackets
  const s  = input.replace(/[^\(\)\[\]\{\}]+/g, "")
  // iterate through the string s
  for (const char of s) {
    // If the character is not in hash (open paren)
    if (!(char in hash)) {
      // push it to the stack and wait for it's pair
      stack.push(char);
      // else...
    } else {
        // ... if it is in hash, but not characters pair
        if (stack.at(-1) !== hash[char]) {
          // mismatch found
        return false;
          // else a match is found and pop off the matched open paren
        } else {
            stack.pop();
          }
      }
    }
  // if all the pairs are matched --> stack.length === 0
  return stack.length === 0;
};