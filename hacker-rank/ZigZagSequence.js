/*
Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. 
A sequence will be called a zig zag sequence if the first k elements 
in the sequence are in increasing order and the last k elements are in decreasing order, where k=(n+1)/2. 
You need to find the lexicographically smallest zig zag sequence of the given array.
*/
function findZigZagSequence(a,n){
    a.sort((a,b)=>a-b);
    let mid = parseInt((n + 1)/2);
    let st = mid-1;
    let ed = n-1;
    while(st <= ed){
        tmp = a[st]
        a[st] = a[ed];
        a[ed] =tmp;
        st++;
        ed--;
    }
    for(let i=0;i<n;i++) {
        console.log(a[i]);
    }
}
function main(){
    const a = [1,2,3,4,5,6,7];//1,2,3,7,6,5,4
    const n= 7;
    findZigZagSequence(a,n);
}
main();