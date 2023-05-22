/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //滑动窗口：两个指针及中间的集合
    //终止位置是随着for循环一个一个往后移动的
    //重点是如何移动起始位置
    let sum=0
    let res=nums.length+1//这里是为了设置一个不可能的情况为了后续判断（如果设置为0后面判断就不方便）
    let i=j=0
    for(;j<nums.length;j++){
        sum+=nums[j]
        while(sum>=target){//是while，是>+
            res=Math.min(j-i+1,res)
            i++
            sum-=nums[i-1]
        }
    }
    return res===nums.length+1?0:res
};
// @lc code=end

