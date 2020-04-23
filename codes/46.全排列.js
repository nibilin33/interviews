/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* 回溯算法的框架：    
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择 */

var permute = function(nums) {
    let result = [];
    function backtrack(list){
        if(nums.length == list.length) {
            let copy = JSON.parse(JSON.stringify(list));
            result.push(copy);
            return;
        }
        for(let i=0;i<nums.length;i++) {
            if(list.indexOf(nums[i])>-1) {
                continue;
            }
            list.push(nums[i]);
            backtrack(list);
            list.pop();
        }
    }
    backtrack([]);
    return result;
};
// @lc code=end

