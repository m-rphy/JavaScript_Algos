




const letterCombinationPhoneNumber = (str) => {
    const nums = [...str]

    const numberLetterHash = {
        1: '',
        2: [...'abc'],
        3: [...'def'],
        4: [...'ghi'], 
        5: [...'jkl'], 
        6: [...'mno'],
        7: [...'pqrs'],
        8: [...'tuv'],
        9: [...'wxyz'],
    };

    const res = [];
    let candidates = ['']
    for (let num of nums) {
       candidates = candidates.flatMap(combination => {
        return numberLetterHash[num].map(letter => combination + letter)});
    };
  
    // create backtracking dfs function
    const dfs = (idx, total = '') => {

        // base case:
        if (idx === candidates.length) {
            if (total.length === nums.length) res.push(total)
            return;
        }
        // Take it OR Leave it:
        if (candidates[idx] !== '') dfs(idx + 1, total + candidates[idx]); // take
        dfs(idx + 1, total); // leave
    };
    // initial conditions
    dfs(0, '');
    console.log(res)
    return res;
  };

//   console.log(letterCombinationPhoneNumber('7878')); // at least one 'rust'