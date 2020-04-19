/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 超时了，有组数据长度为3000
var threeSum = function (nums) {
    // a+b = -c
    console.time('threeSum');
    let result = new Map();
    nums = nums.sort((a,b)=> a-b);
    let splitIndex = nums.findIndex((it)=>it>=0);
    function addResult(i,j,k) {
        if(j==k) return;
        if(nums[i]+nums[j]+nums[k] === 0 ) {
            if(j>k) {
                let tmp = j;
                j = k;
                k = tmp;
            }
            const triple =[nums[i],nums[j],nums[k]];
            result.set(triple.toString(),triple);
        }
    }
    console.log(splitIndex);
    // 从小于0区域开始
    for(let i=0;i<splitIndex;i++) {
        // 选择大于=0的
        for(let j=splitIndex;j<nums.length;j++) {
            // 如果两个小于0，从大于0的范围查找
            if(nums[i]+nums[j] <=0) {
                for(let k=splitIndex;k<nums.length;k++) {
                     addResult(i,j,k);
                }
            }else{
                for(let k=i+1;k<splitIndex;k++) {
                     addResult(i,j,k);
                }
            }
        }
    }
    if(nums.filter((it)=>it===0).length>=3) {
        const triple = [0,0,0];
        result.set(triple.toString(),triple);
    }
    console.timeEnd('threeSum');
    return Array.from(result.values());
};
// @lc code=end

