/**
 * Given an array nums of distinct integers, return all the 
 * possible permutations. You can return the answer in any order.
 * 
 * Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

// O(n! * n^2) time | O(n!) space
const permute = (nums, idx = 0) => {
  if (nums.length === idx) return [[]];
  // recursively call function with next index
  const combos = permute(nums, idx + 1);
  // declare output variable
  const output = [];
  for (let combo of combos) {
    for (let i = 0; i <= combo.length; i++) {
      output.push([...combo.slice(0, i), nums[idx], ...combo.slice(i)]);
    }
  }
  return output;
};

// O(n! * n^2) time | O(n!) space
const permute2 = (nums) => {
  const output = [];
  const dfs = (idx) => {
    if (nums.length === idx) output.push([...nums]);
    for (let i = idx; i < nums.length; i++) {
      // swap
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
      // recursively call dfs with next idx
      dfs(idx + 1);
      // swap back (backtrack);
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
  };
  dfs(0);
  return output;
};

// Time: O(n^2 * n!)
function permutationsIterative(nums) {
  let perms = [];
  perms.push([]);

  for (let n of nums) {
      let nextPerms = [];
      for (let p of perms) {
          for (let i = 0; i < p.length + 1; i++) {
              let pCopy = [...p];
              pCopy.concat(p);
              pCopy.splice(i, 0, n);
              nextPerms.push(pCopy);
          };
      };
      perms = nextPerms;
  };
  return perms;
};

console.log(permutationsIterative([1,2,3]));

// Time: O(n^2 * n!)
function permutationsRecursive(nums) {
  return helper(0, nums);
};

function helper(i, nums) {
  if (i == nums.length) {
      return [[]];
  }
  let resPerms = [];
  let perms = helper(i + 1, nums);
  for (let p of perms) {
      for (let j = 0; j < p.length + 1; j++) {
          let pCopy = [...p];
          pCopy.splice(j, 0, nums[i]);
          resPerms.push(pCopy);
      };
  };
  return resPerms; 
};

console.log(permutationsRecursive([1,2,3]));