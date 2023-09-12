/**
 * 
 * @param {s: string} s 
 * @returns number -> That is the longest substring without repeating characters
 * 
 * This algorithm implements a sliding window
 */

const lengthOfLongestSubstring0 = function(s) {
    let subStr = '';
    let L = 0;
    let R = 0;
    let maxLength = 0;
    
    while (R < s.length) {
        if (!subStr.includes(s[R])) {
            subStr += s[R];
            R++;
        } else {
            L++;
            R = L;
            subStr = '';
        };
        if (subStr.length > maxLength) maxLength = subStr.length;
    }
    return maxLength
};

const lengthOfLongestSubstring = function(s) {
    let subStr = '';
    let L = 0;
    let R = 0;
    let maxLength = 0;
    
    while (L < s.length) {
        while (!subStr.includes(s[R]) && R < s.length) {
            subStr += s[R];
            R++;
        };
        if (subStr.length > maxLength) maxLength = subStr.length;
        L++;
        R = L;
        subStr = '';
    };
    return maxLength
};