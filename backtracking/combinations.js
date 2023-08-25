

// given n and k, find all possible combincations of size = k
// give values between values 1...n

// Time: O(k * 2^n), Space: 
const combinations = (n, k) => {

    const combinations = [];

    const dfs = (index = 1, currCombination = []) => {
        if (currCombination.length >= k) return combinations.push([...currCombination]);
        if (index > n) return;

        currCombination.push(index);
        dfs(++index, currCombination);
        currCombination.pop();
        dfs(index, currCombination);
    }

    dfs();
    return combinations;
};

console.log(combinations(3,2));