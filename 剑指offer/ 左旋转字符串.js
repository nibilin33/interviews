/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * s = "abcdefg", k = 2
 * "cdefgab"
 */
var reverseLeftWords = function(s, n) {
    let result = s.substring(n,s.length)+s.substring(0,n);
    return result;
};