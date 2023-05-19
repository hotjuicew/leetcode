/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    //fast:寻找新数组需要的元素
    //slow：新数组元素的下标
    let f=s=0;
    for(let i=0;i<nums.length;i++){
        if(nums[f]!==val){
            nums[s]=nums[f]
            f++
            s++
        }else f++    
    }
    return s
};
// @lc code=end

