

const coins = [0.01, 0.05, 0.1, 0.25, 0.5];

const coinSum = (candidates, target) => {

    const res = {};
    const cur = [];
    let minLength = Infinity;
  
    // create backtracking dfs function
    const dfs = (idx, cur, total) => {
      // base case: Valid
      if (total === target) {
        if (cur.length < minLength) {
            minLength = cur.length
        }
        res[cur.length] = [...cur];
        return;
      };
      // base case: Not Valid
      if (idx === candidates.length || total > target) return;
      
      // Take it OR Leave it:
      cur.push(candidates[idx]); // take
      dfs(idx, [...cur], total + candidates[idx]);
  
      cur.pop(); // leave
      dfs(idx + 1, [...cur], total);
    };
    // initial conditions
    dfs(0, cur, 0);

    return res[minLength];
  };

  console.log(coinSum(coins, 1.27))