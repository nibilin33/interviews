/*
Given an array of integers, where all elements but one occur twice, 
find the unique element.
*/
function lonelyinteger(a) {
    // Write your code here
    let visitedMap = {};
    for(let i=0;i<a.length;i++) {
        if(typeof visitedMap[a[i]] === 'undefined') {
            visitedMap[a[i]] = 0;
        }
        visitedMap[a[i]]++;
    }
    return Object.keys(visitedMap).find((key)=>visitedMap[key]===1);
}
function main() {
    const a = [1,2,3,4,3,2,1];
    const result = lonelyinteger(a);
    console.log(result);
}
main();