let string = 'aabbaabbaabb';

const longestRepeatingSubstring = function(s) {
    const stringLen = s.length;

    let subStr = '';

    for (let i = 0; i < stringLen; i++) {
        subStr += s[i];
        let num = Math.ceil(stringLen / subStr.length)
        testStr = Array.from({length: num}, () => subStr).join('');
        if (testStr == s && subStr.length != stringLen) return subStr;
    }
    return false;
};

console.log(longestRepeatingSubstring(string));