/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res=new Array(n).fill(0).map(()=>new Array(n).fill(0))
    //(x,y):matrix[x][y]表示第x+1行，第y+1列。
    //矩阵的行索引x对应于垂直方向，列索引y对应于水平方向！！！！！
    //与小学学习的坐标系约定是相反的。在常见的笛卡尔坐标系中，通常使用 x 轴表示水平方向，y 轴表示垂直方向。而在矩阵中，行索引表示垂直方向，列索引表示水平方向。这两种约定在表示方向时是相反的。
    //  |-startY--y2--y3---y4---y5---Y
    //  |startX
    //  |x2
    //  |x3
    //  |x4
    //  |x5
    //  |X
    //设定每条边遍历时都左闭右开（最后一个不遍历）
    let loop=Math.floor(n/2)//转几圈
    let count=1
    let startX=startY=0
    let offset=1;//每次循环右边界收缩一位
    let mid = Math.floor(n/2);  
    while(loop--){
        for(y=startY;y<n-offset;y++){
            res[startX][y]=count++
        }
        for(x=startX;x<n-offset;x++)[
            res[x][n-offset]=count++
        ]
        for(y=n-offset;y>startY;y--){
            res[n-offset][y]=count++
        }
        for(x=n-offset;x>startX;x--){
            res[x][startY]=count++
        }
        offset++
        startX++
        startY++
    }
    if(n%2)res[mid][mid]=count++
    return res
};
// @lc code=end

