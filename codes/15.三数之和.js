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
// 头尾i,j相加，如果和是负数，移动较大的那个，如果和是正数，移动较小的那个
//如果 nums[i]== nums[i-1]nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
// 当 sumsum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
// 当 sumsum == 0 时，nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R--
var threeSum = function(nums) {
    if(nums==null||nums.length <3) {
        return [];
    }
    // 从小到大排序
    nums = nums.sort((a,b)=>a-b);
    let result = [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > 0) break; // 最小也大于0的话，就不可能为0
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let l=i+1,r=nums.length-1;
        while(l<r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                result.push([nums[i],nums[l],nums[r]]);
                while (l<r && nums[l] == nums[l+1]) l++; // 去重
                while (l<r && nums[r] == nums[r-1]) r--; // 去重
                l++;
                r--;
            }else if(sum < 0) {
                l++;
            }else{
                r--;
            }
        }
    }
    return result;
    
};
// @lc code=end
// [1,-1,-1,0]
// [3,0,-2,-1,1,2]
// [-2,0,1,1,2]
