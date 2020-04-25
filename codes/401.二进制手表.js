/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const pick = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
    let results = new Set();
    function backtrace(hours,minutes,used,sumh,summ){
        if(hours+minutes === num) {
            results.add(`${sumh}:${summ<10?'0'+summ:summ}`);
            return;
        }
        for(let i=0;i<pick.length;i++) {
            if(used[i]) {
                continue;
            }
            if(i<4 && sumh+pick[i] < 12) {
                sumh+=pick[i];
                hours++;
                used[i] = true;
                backtrace(hours,minutes,used,sumh,summ);
                used[i] = false;
                sumh-=pick[i];
                hours--;
            }
            if(i>=4 && summ+pick[i]<60){
                summ+=pick[i];
                minutes++;
                used[i] = true;
                backtrace(hours,minutes,used,sumh,summ);
                summ-=pick[i];
                minutes--;
                used[i] = false;
            }
           
        }
    }
    backtrace(0,0,[],0,0);
    return Array.from(results);
};
// var exp = ["0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24","0:33","0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16","1:32","2:01","2:02","2:04","2:08","2:16","2:32","3:00","4:01","4:02","4:04","4:08","4:16","4:32","5:00","6:00","8:01","8:02","8:04","8:08","8:16","8:32","9:00","10:00"];
// console.log(exp.length);
// console.log(readBinaryWatch(2).length);
// @lc code=end

