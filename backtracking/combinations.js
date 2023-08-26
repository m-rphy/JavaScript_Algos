

// given n and k, find all possible combincations of size = k
// give values between values 1...n

// Time: O(k * 2^n), Space: 
const combinations = (n, k) => {

    const combinations = [];

    const dfs = (index = 1, currCombination = []) => {
        // Found a combination
        if (currCombination.length >= k) return combinations.push([...currCombination]);
        // Gone out of bounds
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


// Optimized
// N chose K -> C(n,k) -> N!/[(n-k)! *K!]
// Time: O(k * C(n, k))
const optimizedCombination = (n, k) => {
    const combinations = [];

    const dfs = (index = 1, currCombination = []) => {
        // Found a combination
        if (currCombination.length >= k) return combinations.push([...currCombination]);
        if (index > n) return;

        for (let j = index; j < n + 1; j++) {
            currCombination.push(j);
            dfs(j + 1, currCombination);
            currCombination.pop();
        };
    };

    dfs();
    return combinations;
}

console.log(optimizedCombination(3,2));
