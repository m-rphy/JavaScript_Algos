// Factorial;


const factorial = (num) => {

    if (num === 0) return 1;
    let acc = 1
    let count = 1;
    while (count <= num) {
        acc *= count
    }

    return acc;
}


// The six permutations of the set {1, 2, 3}, (with repeats)


// [
//     '333', '332', '331', '323',
//     '322', '321', '313', '312',
//     '311', '233', '232', '231',
//     '223', '222', '221', '213',
//     '212', '211', '133', '132',
//     '131', '123', '122', '121',
//     '113', '112', '111'
//   ]

// This is essentially RPS
const permutation = (arr) => {

    const outputArr = [];
    const stack = [];
    const num = arr.length
    
    // Initialize stack with first round and corresponding output index
    for (let i = 0; i < arr.length; i++) {
        stack.push([num - 1, [arr[i]]]);
    }
    while (stack.length) {
        const [round, roundArr] = stack.pop();

        if (round === 0) {
        outputArr.push(roundArr.join(''));
        continue;
        }
        // Push each choice for the current round onto the stack
        for (let i = 0; i < arr.length; i++) {
        stack.push([round - 1, [...roundArr, arr[i]]]);
        }
    }

    return outputArr;
};

console.log(permutation([1,2,3]))


// -> (1, 2, 3), 
//    (1, 3, 2), 
//    (2, 1, 3), 
//    (2, 3, 1), 
//    (3, 1, 2),
//    (3, 2, 1)


function permute(nums) {
    const result = [];
    backtrack(nums, 0, result);
    return result;
  }
  
  function backtrack(nums, start, result) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
  
    for (let i = start; i < nums.length; i++) {
      swap(nums, start, i);
      backtrack(nums, start + 1, result);
      swap(nums, start, i); // backtrack by swapping back the elements
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

console.log(permute([1,2,3]))

// combination
