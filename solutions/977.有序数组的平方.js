/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let k=nums.length-1
    let res=new Array(k).fill(0)
    //定义左右指针为i，j
    //为什么是有=?
    //因为如果不遍历i=j的时候的话，会漏掉一个数
    for(let i=0,j=nums.length-1;i<=j;){
        if(nums[i]*nums[i]>nums[j]*nums[j]){
            res[k--]=nums[i]*nums[i]
            i++
        }else{
            res[k--]=nums[j]*nums[j]
            j--
        }
    }
    return res
};
// 第二次
// var sortedSquares = function(nums) {
//     let left=0,right=nums.length-1
//     let res=[]
//   while(left<=right){
//     if(nums[left]*nums[left]>nums[right]*nums[right]){
//         res.unshift(nums[left]*nums[left])
//         left++
//     }else{
//         res.unshift(nums[right]*nums[right])
//         right--
//     }
//   }
//   return res
// };
// @lc code=end

