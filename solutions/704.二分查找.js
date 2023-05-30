/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //边界处理很重要
    //这里我们定义一个左闭右开的区间 [left,right)
    let left=0,right=nums.length
    while(left<right){//注意这里是<而不是<=,因为这是一个左闭右开的区间，所以left和right不可能相等
        let mid=left+Math.floor((right-left)/2)
         //也可以Math.floor((left + right) / 2)
        console.log(mid);
        if (nums[mid]===target) return mid
        else{
            if(nums[mid]>target){
                right=mid //这是个左闭右开的区间嘛
            }else {
                left=mid+1
            }
        }
    }
    return -1

};
// @lc code=end

