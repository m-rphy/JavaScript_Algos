
// Give a list of distinct numbers, return all possible disinct subset!

// desicion tree!


// Time: O(n * 2^n), Space: O(n)
const subSet = (arr) => {


    const dfs = (index, arr, curSet = [], subSets = []) => {
        // base case:
        if (index >= arr.length)  {
            subSets.push([...curSet]);
            return;
        };
        
        // recursive case:
        // take it
        curSet.push(arr[index])
        dfs(++index, arr, curSet, subSets);
        // leave it
        curSet.pop();
        dfs(index, arr, curSet, subSets);
    };
    const subSets = [];
    dfs(0, arr, [], subSets);
    return subSets;
};

console.log(subSet([1,2,3]))