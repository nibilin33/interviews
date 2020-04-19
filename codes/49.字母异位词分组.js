/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 
var groupAnagrams = function(strs) {
    let map = {};
    for(let str of strs){
        let s = str.split('').sort().join('');
        if(map[s]){
            map[s].push(str);
        }else{
            map[s] = [str];
        }
    }
  return  [...Object.values(map)];
};
//var input = ["eat", "tea", "tan", "ate", "nat", "bat"];
//var input = ["", ""];
//var input = ["","b",""];
//var input = ["tea","and","ace","ad","eat","dans"];
//console.log(groupAnagrams(input));
// @lc code=end

