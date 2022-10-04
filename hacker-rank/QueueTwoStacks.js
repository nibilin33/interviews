const fs = require('fs');
let testcase = fs.readFileSync('./QueueTwoStacks.txt').toString();
function processData(input) {
    //Enter your code here
    let arr = input.split('\n');
    const t = arr.shift();
    let stack = [];
    function twoSacks(type,data) {
     // console.log(type,data)
     if(type==1) {
         stack.push(data);
     }
     if(type==2) {
         stack.shift();
     }
     if(type==3) {
         console.log(stack[0]);
     }
    }
    for(let i=0;i<t;i++) {
        let item = arr[i].split(' ');
        twoSacks(...item);
    }
} 
processData(testcase);// 14,14