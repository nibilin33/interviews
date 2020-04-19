/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let i=0;i<nums.length;i++) {
        map[nums[i]] = typeof map[nums[i]] === 'undefined' ? 1: map[nums[i]]+1;
        if(map[nums[i]]>1) {
            return true;
        }
    }
    return false;
};