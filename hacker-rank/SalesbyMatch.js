/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.
*/

function sockMerchant(n, ar) {
    // Write your code here
    let colorMap = {};
    let pairs = 0;
    for(let i=0;i<n;i++) {
        if(typeof colorMap[ar[i]]=== 'undefined') {
            colorMap[ar[i]]=1;
        }else{
            colorMap[ar[i]]++;
        }
    }
    Object.keys(colorMap).forEach((key)=>{
        pairs+=parseInt(colorMap[key]/2);
    });
    return pairs;
}

function main() {
    const n = 10;
    const ar = [1,1,3,1,2,1,3,3,3,3];
    const result = sockMerchant(n, ar); // 4
    console.log(result);
}
main();